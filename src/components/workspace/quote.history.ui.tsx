import * as React from 'react';
import styled from 'styled-components';
import Quote from '../../domain/qoute.model';
import QuoteTile from './quote.tile.ui';

interface QuoteHistoryProps {
	quotes: Quote[];
}

const QuoteHistoryList = styled.div`

	outline: 2px solid green;
	background: #ebebeb;

	h3{
		position: relative;
		top: 0;
		margin: 0;
		text-align: center;
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