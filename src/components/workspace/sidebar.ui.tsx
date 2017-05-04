import * as React from 'react';
import styled from 'styled-components';

const SideNav = styled.div`

	background-color: #808080;

`;

class SideBar extends React.Component<void, void> {
	render() {
		return (
			<SideNav>
				sidebar
			</SideNav>
		);
	}
}

export default SideBar;