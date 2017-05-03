import * as React from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';

import DomainModel from '../../domain/domain.model';
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
		let quotes = JSON.parse(localStorage.getItem('stockQuoteHistory'));
		if (quotes !== null) {
			for (let item of quotes) {
				let qt = item as Quote;
				this.props.domain.pushQuoteHistory(qt);
			}
		}
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
				<h1>{domain.quote ? domain.quote.Name : ''}</h1>
				<div>
					{this.renderQuote()}
				</div>
				<QuoteHistory quotes={domain.quoteHistory} />
			</StyledWorkspace>
		);
	}
}

export default Workspace;