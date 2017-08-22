import * as React from 'react';
import { observer } from 'mobx-react';

import styled from 'styled-components';
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

@observer
class QuoteHistory extends React.Component<QuoteHistoryProps, void> {

	private renderQuotes = () => {
		return this.props.quotes.map((quote, index) => {
			return <QuoteTile
				daysHigh={quote.DaysHigh}
				daysLow={quote.DaysLow}
				name={quote.Name}
				symbol={quote.Symbol}
				key={index}
				change={quote.Change}
				onclick={(value) => this.props.onclick(value)}
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