import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {observer} from 'mobx-react';
import injectGlobal from 'styled-components';

import App from './components/app.ui';

ReactDOM.render(
	<App/>,
	document.getElementById('react')
);