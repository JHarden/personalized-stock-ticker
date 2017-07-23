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

const SearchResultsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: relative;
	display: block;
`;

interface NavbarProps {
	model: BaseModel;
}

@observer
class Navbar extends React.Component<NavbarProps, void> {

	render() {
		const { model } = this.props;
		return (
			<div>
				<Nav>
					<Flex column center fill>
						<Search model={model.searchModel} />
					</Flex>
					<ClearButton onClick={() => model.domainModel.clearQuoteHistory()} />
				</Nav>
				<SearchResultsWrapper>
					<SearchResults suggestions={model.domainModel.suggestedTickers} onClick={(val) => model.domainModel.getMiniQuote(val)}/>
				</SearchResultsWrapper>
			</div>
		)
	}
}

export default Navbar;