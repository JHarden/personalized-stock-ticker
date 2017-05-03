import * as React from 'react';
import Quote from '../../domain/qoute.model';
import QuoteTile from '../quote/quote.ui';

interface QuoteHistoryProps {
	quotes: Quote[];
}

class QuoteHistory extends React.Component<QuoteHistoryProps, void> {

	private renderQuotes = () => {
		console.log('QH', this.props.quotes);
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
			<div>
				<h2>Quote History</h2>
				{this.renderQuotes()}
			</div>
		);
	}
}
export default QuoteHistory;