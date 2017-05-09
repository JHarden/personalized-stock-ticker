import * as React from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';
import Search from './search.ui';
import ClearButton from '../navbar/clear.ui';
import BaseModel from '../base.model';

const Nav = styled.div`
    background-color: ${ props => props.theme.backgroundSecondary};
    height: 50px;
	display: flex;
	justify-content: center;
	padding: 20px 0 0;
`;

interface NavbarProps {
	model: BaseModel;
}

const Navbar = (props: NavbarProps) => {
	return (
		<Nav>
			<Search model={props.model.searchModel} />
			<ClearButton onClick={() => props.model.domainModel.clearQuoteHistory()} />
		</Nav>
	);
};

export default Navbar;