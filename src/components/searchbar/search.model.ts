
import { observable, action } from 'mobx';

class SearchModel {

	@observable searchString: string;

	@action.bound setSearch(searchString: string) {
		this.searchString = searchString;
	}
}
export default SearchModel;