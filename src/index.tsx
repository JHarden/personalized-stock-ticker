import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ToolMenuList from './components/toolbox/ToolMenuList.ui';
import ToolMenuItemStore from './components/toolbox/ToolMenu.store';

ReactDOM.render(
	<span>
		<h1>React app</h1>
		<ToolMenuList />
	</span>,
	document.getElementById('example')
);