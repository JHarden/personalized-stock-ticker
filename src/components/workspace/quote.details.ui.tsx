import * as React from 'react';
import styled from 'styled-components';

interface QuoteDetailProps {
	name: string;
	symbol: string;
	stockExchange: string;
	daysLow: string;
	daysHigh: string;
	yearLow: string;
	yearHigh: string;
	ask: string;
	bid: string;
	marketCap: string;
	percentChange: string;
}

const Tile = styled.div`
	height: 100%;
	width: 100%;
	ul{
		list-style: none;
		margin: 0;
		color: #FFF;
	}
`;

class QuoteDetails extends React.Component<QuoteDetailProps, void> {

	render() {
		return (
			<Tile>
				<ul>
					<li>{this.props.name}</li>
					<li>{this.props.symbol}</li>
					<li>{this.props.stockExchange}</li>
					<li>{this.props.daysLow}</li>
					<li>{this.props.daysHigh}</li>
					<li>{this.props.yearLow}</li>
					<li>{this.props.yearHigh}</li>
					<li>{this.props.ask}</li>
					<li>{this.props.bid}</li>
					<li>{this.props.marketCap}</li>
					<li>{this.props.percentChange}</li>
				</ul>
			</Tile>
		);
	}
}

export default QuoteDetails;