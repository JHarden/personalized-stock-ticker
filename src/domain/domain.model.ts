
import { action, observable } from 'mobx';

import { Observable } from 'rxjs';

import Quote from './qoute.model';

const YQL_BASE = `https://query.yahooapis.com/v1/public/yql?q=select * from yahoo.finance.quotes where symbol =`;
const YQL_POST = `&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=`;
class DomainModel {

	@observable quote: Quote;
	@observable quoteHistory: Quote[];

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
				this.setQuote(stockQoute as Quote);
			},
			(err: any) => console.log('ajax err', err)
		);
	}

	@action.bound setQuote(quote: Quote) {
		this.quote = quote;
		localStorage.setItem('stockQuote', JSON.stringify(this.quote));
		console.log('Q', this.quote.Name);
	}

	@action.bound getQuoteHistory() {
		return this.quoteHistory;
	}

	@action.bound pushQuoteHistory(quote: Quote) {
		this.quoteHistory.push(quote);
	}
}

export default DomainModel;