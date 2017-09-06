import * as React from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';
import Search from './search.ui';
import ClearButton from '../navbar/clear.ui';
import BaseModel from '../base.model';
import SearchResults from './search.result.ui';
import Flex from '../common/flex.ui';

const Nav = styled.div`
    background-color: ${ props => props.theme.backgroundSecondary};
    height: 50px;
	display: flex;
	justify-content: center;
	padding: 20px 0;
	width: 100%;
`;

interface NavbarProps {
	model: BaseModel;
}

const Column = styled.div`
	width: 600px;
	position: relative;
`;

@observer
class Navbar extends React.Component<NavbarProps, void> {

	render() {
		const { model } = this.props;
		return (
			<div>
				<Nav>
					<Flex column center fill>
						<Column>
							<Search model={model.searchModel} />
						</Column>
						<Column>
							<SearchResults suggestions={model.domainModel.suggestedTickers} onClick={(val) => model.domainModel.getMiniQuote(val)} />
						</Column>
					</Flex>
					<ClearButton onClick={() => model.domainModel.clearQuoteHistory()} />
				</Nav>
			</div>
		)
	}
}

export default Navbar;