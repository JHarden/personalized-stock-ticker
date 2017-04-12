
import { action, observable } from 'mobx';

import { Observer } from 'rxjs';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/dom/ajax';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';

class DomainModel {

	private hostUrl: string = 'https://query.yahooapis.com/v1/public/yql?q=';
	private yQLqueryString: string = '';



	@action.bound sendTestPost(input: string) {

		let apiCall = this.hostUrl + 'select * from yahoo.finance.quotes where symbol in (' + input + ')';
		console.log('CALL: ', apiCall);

		let posts$ = Observable
		.ajax(apiCall)
		.map(e => e.response);

		let htmlSubscription = posts$
		.subscribe((res: any) => {
			console.log(JSON.stringify(res, null, 2));
		});
	}
}

export default DomainModel;