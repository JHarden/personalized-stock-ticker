
import { action, observable } from 'mobx';
import { Observable } from 'rxjs';
import QuoteSnapshot from './quote.snapshot.model';

const YQL_BASE = `https://query.yahooapis.com/v1/public/yql?q=select * from yahoo.finance.quote where symbol =`;
const YQL_POST = `&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=`;
class DomainModel {

	@observable quote: QuoteSnapshot;
	@observable quoteHistory: QuoteSnapshot[] = [];

	@action.bound sendTestPost(input: string) {

		let apiCall = YQL_BASE + `'` + input + `'` + YQL_POST;

		(<any>Observable).ajax({
			url: apiCall,
			crossDomain: true,
			withCredentials: false
		})
			.subscribe(
			(r: any) => {
				let stockQoute = r.response.query.results.quote;
				this.setQuote(stockQoute as QuoteSnapshot);
			},
			(err: any) => console.log('ajax err', err)
			);
	}

	@action.bound setQuote(quote: QuoteSnapshot) {
		console.log('test', quote);
		if (this.isDuplicate(quote)) return;
		this.quote = quote;
		this.quoteHistory.push(this.quote);
		localStorage.setItem('stockQuoteHistory', JSON.stringify(this.quoteHistory));
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

}

export default DomainModel;