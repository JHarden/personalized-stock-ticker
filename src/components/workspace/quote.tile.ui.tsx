import * as React from 'react';
import styled from 'styled-components';

interface QuoteTileProps {
	name: string;
	symbol: string;
	ask: string;
	bid: string;
}

const Tile = styled.div`
	height: 75px;
	width: 200px;
	outline: 1px solid #666;
	font-size: 12px;
	text-align: left;
	background-color: ${props => props.theme.backgroundSecondary};
	color: #FFF;
	ul{
		list-style: none;
	}
	h4{
		font-size: 16px;
		font-weight: 400;
		margin: 0;
		color: green;
	}
	label{
		font-size: 12px;
		color: #ababd6;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		display: block;
		width: 200px;
	}
`;

class QuoteTile extends React.Component<QuoteTileProps, void> {

	render() {
		return (
			<Tile>
				<h4>{this.props.symbol}</h4>
				<label>{this.props.name}</label>
				<ul>
					<li>{this.props.ask}</li>
					<li>{this.props.bid}</li>
				</ul>
			</Tile>
		);
	}
}

export default QuoteTile;