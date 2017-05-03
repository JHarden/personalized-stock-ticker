import * as React from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';

import DeserializationHelper from '../../domain/deserializer/DeserializeHelper';
import BaseModel from '../BaseModel';
import Quote from '../../domain/qoute.model';
import QuoteTile from '../quote/quote.ui';
import QuoteHistory from '../recent/QuoteHistory';

interface WorkspaceProps {
	quote: Quote;
}

const StyledWorkspace = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	align-content: center;
	font-family: HelveticaNeue, Arial, sans-serif;
`;

@observer
class Workspace extends React.Component<WorkspaceProps, void> {

	public quoteHistory: Quote[] = [];

	componentWillMount() {
		this.setQuoteHistory();
	}
	public setQuoteHistory() {
		let stringQuote: any = localStorage.getItem('stockQuote');
		this.quoteHistory.push(DeserializationHelper.toInstance(new Quote, stringQuote));
	}

	public renderQuote() {
		if (this.props.quote) {
			return (
				<QuoteTile
					ask={this.props.quote.Ask}
					bid={this.props.quote.Bid}
					name={this.props.quote.Name}
					symbol={this.props.quote.Symbol}
				/>
			);
		}
	}

	render() {
		const { quote } = this.props;
		return (
			<StyledWorkspace>
				<h1>{this.props.quote ? this.props.quote.Name : ' :o'}</h1>
				<div>
					{this.renderQuote()}
				</div>
				<QuoteHistory quotes={this.quoteHistory}/>
			</StyledWorkspace>
		);
	}
}

export default Workspace;