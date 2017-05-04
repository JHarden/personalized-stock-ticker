
import { observable, action } from 'mobx';
import DomainModel from '../../domain/domain.model';

class SearchModel {

	@observable searchString: string;

	private sendToDomainModel: (val: string) => void;

	constructor(sendToDomainModel: (val: string) => void) {
		this.sendToDomainModel = (val: string) => sendToDomainModel(val);
	}

	@action.bound setSearch(searchString: string) {
		this.searchString = searchString;
	}

	@action.bound sendSearch() {
		this.sendToDomainModel(this.searchString);
	}
}
export default SearchModel;