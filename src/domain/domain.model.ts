
import { action, observable } from 'mobx';
import { Observable } from 'rxjs';
import QuoteSnapshot from './quote.snapshot.model';
import Quote from './quote.model';
import { SearchResult } from '../components/common/types';

const YQL_BASE = `https://query.yahooapis.com/v1/public/yql?q=select * from yahoo.finance.quote where symbol =`;
const YQL_FULL = `https://query.yahooapis.com/v1/public/yql?q=select * from yahoo.finance.quotes where symbol =`;
const YQL_POST = `&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=`;
const AUTOCOMPLETE = `https://s.yimg.com/aq/autoc?query=`;
const AUTOCOMPLETE_STUB = `&region=CA&lang=en-CA`;

class DomainModel {

	@observable quote: QuoteSnapshot;
	@observable fullQuote: Quote;
	@observable quoteHistory: QuoteSnapshot[] = [];
	@observable suggestedTickers: SearchResult[];

	@action.bound setSuggestedTickers( suggestions: SearchResult[]){
		this.suggestedTickers = suggestions;
	}

	@action.bound autocompleteSearch(input: string) {
		console.log('auto', input);

		let apiCall = AUTOCOMPLETE + input + AUTOCOMPLETE_STUB;
		this.load(apiCall).subscribe(
			value => {
				console.log('value', value);
				this.setSuggestedTickers(value.ResultSet.Result);

				console.log('resultset', this.suggestedTickers);
			},
			error => console.log('error', error),
			() => console.log('complete')
		);
	}

	@action.bound getMiniQuote(input: string) {
		if(!input){
			this.setSuggestedTickers([]);
			return;
		}
		let apiCall = YQL_BASE + `'` + input + `'` + YQL_POST;
		this.load(apiCall)
			.subscribe(
			value => {
				let stockQoute = value.query.results.quote;
				this.setQuote(stockQoute as QuoteSnapshot);
				console.log('mini quote: ', stockQoute);
				this.setSuggestedTickers([]);
			},
			e => console.log('ajax err', e)
			);
	}

	@action.bound getFullQuote(input: string) {
		let apiCall = YQL_FULL + `'` + input + `'` + YQL_POST;
		this.load(apiCall)
			.subscribe(
			value => {
				let stockQoute = value.query.results.quote;
				this.setMainPanelQuote(stockQoute as Quote);
			},
			e => console.log('ajax err', e)
			);
	}

	@action.bound setQuote(quote: QuoteSnapshot) {
		if (this.isDuplicate(quote)) return;
		this.quote = quote;
		this.quoteHistory.push(this.quote);
		localStorage.setItem('stockQuoteHistory', JSON.stringify(this.quoteHistory));
	}

	@action.bound setMainPanelQuote(quote: Quote) {
		this.fullQuote = quote;
	}

	@action.bound getQuoteHistory() {
		return this.quoteHistory;
	}

	@action.bound pushQuoteHistory(quote: QuoteSnapshot) {
		this.quoteHistory.push(quote);
	}

	@action.bound clearQuoteHistory() {
		localStorage.clear();
		this.quoteHistory = [];
	}

	public setQuoteHistory() {
		let quotes = JSON.parse(localStorage.getItem('stockQuoteHistory'));
		if (quotes !== null) {
			for (let item of quotes) {
				let qt = item as QuoteSnapshot;
				this.pushQuoteHistory(qt);
			}
		}
	}

	private isDuplicate(quote: QuoteSnapshot): boolean {
		for (let q of this.quoteHistory) {
			if (q.Name === quote.Name) {
				return true;
			};
		}
		return false;
	}

	private load(url: string) {
		return Observable.create(observer => {
			let xhr = new XMLHttpRequest();

			let onload = () => {
				if (xhr.status === 200) {
					let data = JSON.parse(xhr.responseText);
					observer.next(data);
					observer.complete();
				} else {
					observer.error(xhr.statusText);
				}
			};
			xhr.addEventListener('load', onload);

			xhr.open('GET', url);
			xhr.send();

			return () => {
				xhr.removeEventListener('load', onload);
				xhr.abort();
			};
		}).retryWhen(this.retryStrategy({ attempts: 3, delay: 1000 }));
	}

	// logic for retying a failed observable subscription
	private retryStrategy({ attempts = 3, delay = 1000 } = {}) {
		return function (errors) {
			return errors
				.scan((acc, value) => {
					acc += 1;
					if (acc < attempts) {
						return acc;
					} else {
						throw new Error(value);
					}
				}, 0)
				.takeWhile(acc => acc < attempts)
				.delay(delay);
		};
	}
}

export default DomainModel;