import * as React from 'react';
import { observer } from 'mobx-react';

import styled, { keyframes } from 'styled-components';
import QuoteSnapshot from '../../domain/quote.snapshot.model';
import QuoteTile from './quote.tile.ui';

interface QuoteHistoryProps {
	quotes: QuoteSnapshot[];
	onclick: (symbol: string) => void;
}

const QuoteHistoryList = styled.div`
	background-color: ${props => props.theme.backgroundPrimary};
	min-width: 200px;
`;

const gradient = keyframes`
	0% {
		background-position: 0% 50%
	}
	50% {
		background-position: 100% 50%
	}
	100% {
		background-position: 0% 50%
	}
`;

// backgroundPrimary: '#272c33',
// backgroundSecondary: '#3f4652',
// fontColor: '#ababd6',
// highlight: '#5d6675',

const QuotePlaceholder = styled.div`
	height: 75px;
	border-top: 1px solid ${props => props.theme.backgroundPrimary};
	border-bottom: 1px solid ${props => props.theme.backgroundPrimary};
	background: linear-gradient(-45deg, #3f4652, #272c33 );
	background-size: 400% 400%;
	animation: ${gradient} 5s ease-in infinite;
`;

@observer
class QuoteHistory extends React.Component<QuoteHistoryProps, void> {

	private renderQuotes = () => {
		return this.props.quotes.map((quote, index) => {
			if (quote === undefined) {
				return <QuotePlaceholder />;
			}
			return <QuoteTile
				daysHigh={quote.DaysHigh}
				daysLow={quote.DaysLow}
				name={quote.Name}
				symbol={quote.Symbol}
				key={index}
				change={quote.Change}
				onclick={this.props.onclick}
				isActive={false}
				lastTrade={quote.LastTradePriceOnly}
			/>;
		});
	}

	render() {
		return (
			<QuoteHistoryList>
				{this.renderQuotes()}
			</QuoteHistoryList>
		);
	}
}
export default QuoteHistory;