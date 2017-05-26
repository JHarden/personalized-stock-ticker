import * as React from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';

import DomainModel from '../../domain/domain.model';
import Quote from '../../domain/quote.model';
import QuoteTile from './quote.tile.ui';
import QuoteDetails from './quote.details.ui';
import QuoteHistory from './quote.history.ui';

interface WorkspaceProps {
	domain: DomainModel;
}

const StyledWorkspace = styled.div`
	display: flex;
	height: 100%;
	width: 100%;
	flex-direction: row;
	font-family: HelveticaNeue, Arial, sans-serif;
	justify-content: flex-start;
`;

const MainQuotePanel = styled.div`
	background: ${props => props.theme.backgroundPrimary};
	width: 100%;
	height: 100%;
`;

@observer
class Workspace extends React.Component<WorkspaceProps, void> {

	componentWillMount() {
		this.props.domain.setQuoteHistory();
	}

	public renderQuote() {
		if (this.props.domain.fullQuote) {
			return (
				<QuoteDetails
					stockExchange={this.props.domain.fullQuote.StockExchange}
					name={this.props.domain.fullQuote.Name}
					symbol={this.props.domain.fullQuote.Symbol}
					yearLow={this.props.domain.fullQuote.YearLow}
					yearHigh={this.props.domain.fullQuote.YearHigh}
					daysLow={this.props.domain.fullQuote.DaysHigh}
					daysHigh={this.props.domain.fullQuote.DaysHigh}
					ask={this.props.domain.fullQuote.Ask}
					bid={this.props.domain.fullQuote.Bid}
					marketCap={this.props.domain.fullQuote.MarketCapitalization}
					percentChange={this.props.domain.fullQuote.PercentChange}
				/>
			);
		}
	}

	render() {
		const { domain } = this.props;
		return (
			<StyledWorkspace>
				<QuoteHistory quotes={domain.quoteHistory} onclick={(v) => domain.getFullQuote(v)} />
				<MainQuotePanel>
					{this.renderQuote()}
				</MainQuotePanel>
			</StyledWorkspace>
		);
	}
}

export default Workspace;