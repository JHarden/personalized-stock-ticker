import * as React from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';
import ClearButton from '../navbar/clear.ui';
import BaseModel from '../base.model';

const SearchResultsBar = styled.ul`
    background-color: ${ props => props.theme.backgroundSecondary};
    height: 50px;
	display: flex;
	width: 100%;
`;

interface SearchResultsProps {
	children?: React.ReactNode;
}

class SearchResults extends React.Component<SearchResultsProps, void> {

	render() {
		return (
			<SearchResultsBar>
				{this.props.children}
			</SearchResultsBar>
		);
	}

}

export default SearchResults;