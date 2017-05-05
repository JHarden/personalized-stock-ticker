import * as React from 'react';
import { observer } from 'mobx-react';
import Navbar from './navbar/nav.ui';
import Workspace from './workspace/workspace.ui';
import BaseModel from './base.model';

let baseModel = new BaseModel();
// tslint:disable-next-line:import-blacklist
import { injectGlobal, ThemeProvider } from 'styled-components';
// tslint:disable-next-line:no-unused-expression

injectGlobal`
    * {
        font-family: Arial, 'Helvetica', sans-serif;
    }
    html{
        overflow: hidden;
    }
    body, html, #react {
        height: 100%;
        margin: 0;
    }
    #react>div{
        height: 100%;
    }
`;

const theme = {
	backgroundPrimary: '#272c33',
	backgroundSecondary: '#3f4652',
};

@observer
class App extends React.Component<void, void>{

	render() {
		return (
				<ThemeProvider theme={theme}>
					<div>
						<Navbar model={baseModel} />
						<Workspace domain={baseModel.domainModel} />
					</div>
				</ThemeProvider>
		);
	}
}

export default App;