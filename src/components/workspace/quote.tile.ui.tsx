import * as React from 'react';
import styled from 'styled-components';

interface QuoteTileProps {
	name: string;
	symbol: string;
	ask: string;
	bid: string;
}

const Tile = styled.div`

	ul{
		list-style: none;
	}

`;

class QuoteTile extends React.Component<QuoteTileProps, void> {

	render() {
		return (
			<Tile>
				<ul>
					<li>{this.props.name}</li>
					<li>{this.props.symbol}</li>
					<li>{this.props.ask}</li>
					<li>{this.props.bid}</li>
				</ul>
			</Tile>
		);
	}
}

export default QuoteTile;