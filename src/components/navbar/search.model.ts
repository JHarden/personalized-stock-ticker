
import { observable, action } from 'mobx';

class SearchModel {

	@observable searchString: string;

	private sendToDomainModel: (val: string) => void;
	private sendSuggestedSearch: (val: string) => void;

	constructor(sendToDomainModel: (val: string) => void, sendSuggestedSearch: (val: string) => void) {
		this.sendToDomainModel = (val: string) => sendToDomainModel(val);
		this.sendSuggestedSearch = (val: string) => sendSuggestedSearch(val);
	}

	@action.bound setSearch(searchString: string) {
		this.searchString = searchString;
	}

	@action.bound sendSearch() {
		this.sendSuggestedSearch(this.searchString);
	}

	@action.bound sendSuggestion() {
		console.log('search : ', this.searchString);
		this.sendSuggestedSearch(this.searchString);
	}
}
export default SearchModel;