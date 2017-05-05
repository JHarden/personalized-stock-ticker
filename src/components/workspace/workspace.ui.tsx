import * as React from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';

import DomainModel from '../../domain/domain.model';
import Quote from '../../domain/qoute.model';
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
	backgroound: #ebebeb;
	width: 100%;
	height: 100%;
`;

@observer
class Workspace extends React.Component<WorkspaceProps, void> {

	componentWillMount() {
		this.props.domain.setQuoteHistory();
	}


	public renderQuote() {
		if (this.props.domain.quote) {
			return (
				<QuoteDetails
					ask={this.props.domain.quote.Ask}
					bid={this.props.domain.quote.Bid}
					name={this.props.domain.quote.Name}
					symbol={this.props.domain.quote.Symbol}
					yearLow={this.props.domain.quote.YearLow}
					yearHigh={this.props.domain.quote.YearHigh}
					daysLow={this.props.domain.quote.DaysLow}
					daysHigh={this.props.domain.quote.DaysHigh}
				/>
			);
		}
	}

	render() {
		const { domain } = this.props;
		return (
			<StyledWorkspace>
				<QuoteHistory quotes={domain.quoteHistory} />
				<MainQuotePanel>
					{this.renderQuote()}
				</MainQuotePanel>
			</StyledWorkspace>
		);
	}
}

export default Workspace;