import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {observer} from 'mobx-react';

import App from './components/app.ui';


ReactDOM.render(
		<App children={<div></div>}/>,
	document.getElementById('react')
);