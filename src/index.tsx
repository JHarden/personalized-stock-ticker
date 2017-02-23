import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ToolMenuList from './components/toolbox/ToolMenuList.ui';
import ToolMenuItemStore from './components/toolbox/ToolMenu.store';
import Navbar from './components/navbar/Navbar';
ReactDOM.render(
	<span>
		<Navbar />
		<ToolMenuList />
	</span>,
	document.getElementById('react')
);