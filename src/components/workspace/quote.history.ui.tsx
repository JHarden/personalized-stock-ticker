import * as React from 'react';
import styled from 'styled-components';
import Quote from '../../domain/qoute.model';
import QuoteTile from './quote.tile.ui';

interface QuoteHistoryProps {
	quotes: Quote[];
}

const QuoteHistoryList = styled.div`
	background-color: ${props => props.theme.backgroundPrimary};
	min-width: 200px;
`;

class QuoteHistory extends React.Component<QuoteHistoryProps, void> {

	private renderQuotes = () => {
		return this.props.quotes.map((quote, index) => {
			return <QuoteTile
				ask={quote.Ask}
				bid={quote.Bid}
				name={quote.Name}
				symbol={quote.Symbol}
				key={index}
				change={quote.Change}
				changePercent={quote.ChangeinPercent}
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