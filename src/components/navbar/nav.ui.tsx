import * as React from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';
import Search from '../searchbar/search.ui';
import ClearButton from '../navbar/clear.ui';
import BaseModel from '../BaseModel';

const Nav = styled.div`
    background-color: #f1f0f0;
    height: 75px;
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