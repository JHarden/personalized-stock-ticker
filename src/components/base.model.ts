import { observable, useStrict } from 'mobx';

import SearchModel from './navbar/search.model';
import DomainModel from '../domain/domain.model';

useStrict(true);

class BaseModel {

	@observable searchModel: SearchModel;
	@observable domainModel: DomainModel;

	constructor() {
		this.domainModel = new DomainModel;
		this.searchModel = new SearchModel((val: string) => this.domainModel.sendTestPost(val));
	}
}

export default BaseModel;