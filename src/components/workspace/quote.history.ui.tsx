import * as React from 'react';
import styled from 'styled-components';
import QuoteSnapshot from '../../domain/quote.snapshot.model';
import QuoteTile from './quote.tile.ui';

interface QuoteHistoryProps {
	quotes: QuoteSnapshot[];
}

const QuoteHistoryList = styled.div`
	background-color: ${props => props.theme.backgroundPrimary};
	min-width: 200px;
`;

class QuoteHistory extends React.Component<QuoteHistoryProps, void> {

	private renderQuotes = () => {
		return this.props.quotes.map((quote, index) => {
			console.log('mapping quotes', quote);
			return <QuoteTile
				daysHigh={quote.DaysHigh}
				daysLow={quote.DaysLow}
				name={quote.Name}
				symbol={quote.Symbol}
				key={index}
				change={quote.Change}
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