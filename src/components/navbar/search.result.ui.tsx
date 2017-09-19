import * as React from 'react';
import styled from 'styled-components';
import { SearchResult } from '../../components/common/types';

const SearchResultsBar = styled.ul`
	background-color: transparent;
	position: relative;
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
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	&:hover{
		background-color: ${props => props.theme.highlight};
	}
	&>div{
		padding: 0 10px;
	}
`;

const StockExchange = styled.div`
	text-align: right;
	width: 20%;
`;

const StockSymbol = styled.div`
	text-align: left;
	width: 20%;
	color: ${props => props.theme.positive};
`;

const StockName = styled.div`
	text-align: center;
	width: 60%;
	color: ${props => props.theme.fontColor};
`;

const Mask = styled.div`
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1;
`;

class SearchResults extends React.Component<SearchResultsProps, void> {

	private getSearchReslts() {
		return this.props.suggestions && this.props.suggestions.map((suggestion, index) => {
			return (
				<ResultItem key={index} onClick={() => this.props.onClick(suggestion.symbol)}>
					<StockSymbol>
						<span>{suggestion.symbol}</span>
					</StockSymbol>
					<StockName>
						<span>{suggestion.name}</span>
					</StockName>
					<StockExchange>
						<span>{suggestion.exchDisp}</span>
					</StockExchange>
				</ResultItem>);
		});
	}

	render() {
		return (
			<span>
				{this.props.suggestions && this.props.suggestions.length ? <Mask onClick={this.onClickMask}/> : '' }
				<SearchResultsBar>
					{this.getSearchReslts()}
				</SearchResultsBar>
			</span>
		);
	}

	private onClickMask= ()=> {
		this.props.onClick(null);
	}

}

export default SearchResults;