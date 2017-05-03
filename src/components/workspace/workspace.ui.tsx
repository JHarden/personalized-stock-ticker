import * as React from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';

import DomainModel from '../../domain/domain.model';
import DeserializationHelper from '../../domain/deserializer/DeserializeHelper';
import Quote from '../../domain/qoute.model';
import QuoteTile from '../quote/quote.ui';
import QuoteHistory from '../recent/QuoteHistory';

interface WorkspaceProps {
	domain: DomainModel;
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

	componentWillMount() {
		this.setQuoteHistory();
	}
	public setQuoteHistory() {
		let stringQuote: any = localStorage.getItem('stockQuote');
		console.log('DOM', this.props.domain, this.props.domain.quoteHistory);
		this.props.domain.quoteHistory.push(DeserializationHelper.toInstance(new Quote, stringQuote));
	}

	public renderQuote() {
		if (this.props.domain.quote) {
			return (
				<QuoteTile
					ask={this.props.domain.quote.Ask}
					bid={this.props.domain.quote.Bid}
					name={this.props.domain.quote.Name}
					symbol={this.props.domain.quote.Symbol}
				/>
			);
		}
	}

	render() {
		const { domain } = this.props;
		return (
			<StyledWorkspace>
				<h1>{domain.quote ? domain.quote.Name : ' :o'}</h1>
				<div>
					{this.renderQuote()}
				</div>
				<QuoteHistory quotes={domain.quoteHistory}/>
			</StyledWorkspace>
		);
	}
}

export default Workspace;