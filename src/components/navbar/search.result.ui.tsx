import * as React from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';
import ClearButton from '../navbar/clear.ui';
import BaseModel from '../base.model';
import { SearchResult } from '../../components/common/types';

const SearchResultsBar = styled.ul`
	background-color: ${ props => props.theme.backgroundSecondary};
	position: absolute;
    height: auto;
	display: flex;
	flex-direction: column;
	jusfiy-content: center;
	width: 100%;
	margin: 0;
	list-style-type: none;
	padding: 0;
	z-index: 1;
`;

interface SearchResultsProps {
	children?: React.ReactNode;
	suggestions: SearchResult[];
}

const ResultItem = styled.li`
	height: 50px;
	width: 100%;
	background: #FFF;
	color: grey;
`;

class SearchResults extends React.Component<SearchResultsProps, void> {

	private getSearchReslts() {
		if (this.props.suggestions === undefined)
			return;

		return this.props.suggestions.map((suggestion, index) => {
			return (
				<ResultItem key={index}>
					<span>{suggestion.name}</span><span>{suggestion.symbol}</span>
				</ResultItem>);
		});
	}

	render() {
		return (
			<SearchResultsBar>
				{this.getSearchReslts()}
			</SearchResultsBar>
		);
	}

}

export default SearchResults;