import * as React from 'react';

interface QuoteTileProps {
	name: string;
	symbol: string;
	ask: string;
	bid: string;
}

class QuoteTile extends React.Component<QuoteTileProps, void> {

	render() {
		return (
			<div>
				<ul>
					<li>{this.props.name}</li>
					<li>{this.props.symbol}</li>
					<li>{this.props.ask}</li>
					<li>{this.props.bid}</li>
				</ul>
			</div>
		);
	}
}

export default QuoteTile;