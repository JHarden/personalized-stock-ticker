
import SearchModel from './searchbar/search.model';
import { observable } from 'mobx';

class BaseModel {

	@observable searchModel: SearchModel;

	constructor() {
		this.searchModel = new SearchModel;
	}
}

export default BaseModel;