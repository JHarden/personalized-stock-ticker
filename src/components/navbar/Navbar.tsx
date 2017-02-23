import * as React from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';

export interface INavbar {

	className?: string;
}

class Navbar extends React.Component<INavbar, {}> {

	render() {

		return (
			<nav className={this.props.className}>

			</nav>
		);
	}
}


const navbar = styled(Navbar)`

    background-color: #f1f0f0;
    height: 75px;

`;

export default navbar;