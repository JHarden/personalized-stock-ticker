
import SearchModel from './searchbar/search.model';
import DomainModel from '../domain/domain.model';

import { observable } from 'mobx';

class BaseModel {

	@observable searchModel: SearchModel;
	@observable domainModel: DomainModel;

	constructor() {
		this.domainModel = new DomainModel;
		this.searchModel = new SearchModel((val: string) => this.domainModel.sendTestPost(val));
	}
}

export default BaseModel;