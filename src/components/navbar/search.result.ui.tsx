import * as React from 'react';
import styled from 'styled-components';
import { SearchResult } from '../../components/common/types';

const SearchResultsBar = styled.ul`
	background-color: transparent;
	position: absolute;
    height: auto;
	display: flex;
	flex-direction: column;
	jusfiy-content: center;
	align-items: center;
	width: 100%;
	margin: 0;
	list-style-type: none;
	padding: 0;
	z-index: 1;
`;

interface SearchResultsProps {
	children?: React.ReactNode;
	suggestions: SearchResult[];
	onClick: (val: string) => void;
}

const ResultItem = styled.li`
	height: 50px;
	width: 100%;
	background-color: ${props => props.theme.backgroundSecondary};
	border: 1px solid ${props => props.theme.backgroundPrimary};
	color: #FFF;
	cursor: pointer;
	&:hover{
		background-color: ${props => props.theme.highlight};
	}
`;

class SearchResults extends React.Component<SearchResultsProps, void> {

	private getSearchReslts() {
		return this.props.suggestions && this.props.suggestions.map((suggestion, index) => {
			return (
				<ResultItem key={index} onClick={() => this.props.onClick(suggestion.symbol)}>
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