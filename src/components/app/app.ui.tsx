import * as React from 'react';
import { observer } from 'mobx-react';
import Navbar from '../navbar/nav.ui';
import Workspace from '../workspace/workspace.ui';
import BaseModel from '../base.model';

let baseModel = new BaseModel();

@observer
class App extends React.Component<void, void>{

	render() {
		return (
			<div>
				<Navbar model={baseModel} />
				<Workspace domain={baseModel.domainModel} />
			</div>
		);
	}
}

export default App;