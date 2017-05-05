import * as React from 'react';
import styled from 'styled-components';
import Quote from '../../domain/qoute.model';
import QuoteTile from './quote.tile.ui';

interface QuoteHistoryProps {
	quotes: Quote[];
}

const QuoteHistoryList = styled.div`

	background-color: ${props => props.theme.backgroundPrimary};
	width: 200px;
	h3{
		position: relative;
		top: 0;
		margin: 0;
		text-align: center;
		color: ${ props => props.theme.secondary};
	}
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
				<h3>Quote History</h3>
				{this.renderQuotes()}
			</QuoteHistoryList>
		);
	}
}
export default QuoteHistory;