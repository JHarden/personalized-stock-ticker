import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {observer} from 'mobx-react';

import BaseModel from './components/BaseModel';
import Navbar from './components/navbar/nav.ui';
import Workspace from './components/workspace/workspace.ui';

import injectGlobal from 'styled-components';

const baseModel = new BaseModel;

ReactDOM.render(
	<span>
		<Navbar model={baseModel}/>
		<Workspace model={baseModel}/>
	</span>,
	document.getElementById('react')
);