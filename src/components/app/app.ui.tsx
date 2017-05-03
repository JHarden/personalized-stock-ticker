import * as React from 'react';
import { observer } from 'mobx-react';
import Navbar from '../navbar/nav.ui';
import Workspace from '../workspace/workspace.ui';
import BaseModel from '../BaseModel';

let baseModel = new BaseModel();

@observer
class App extends React.Component<void, void>{

	render() {
		return (
			<div>
				<Navbar model={baseModel} />
				<Workspace quote={baseModel.domainModel.quote} />
			</div>
		);
	}
}

export default App;