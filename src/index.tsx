import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './components/app.ui';

ReactDOM.render(
		<App children={<div></div>}/>,
	document.getElementById('react')
);