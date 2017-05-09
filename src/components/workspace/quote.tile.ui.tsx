import * as React from 'react';
import styled from 'styled-components';
import Flex from '../generic/flex.ui';
import CrossButton from './ui/cross.button.ui';

interface QuoteTileProps {
	name: string;
	symbol: string;
	ask: string;
	bid: string;
	change: string;
	changePercent: string;
}

const Tile = styled.div`
	height: 75px;
	width: 180px;
	border-top: 1px solid ${props => props.theme.backgroundPrimary};
	border-bottom: 1px solid ${props => props.theme.backgroundPrimary};
	font-size: 12px;
	text-align: left;
	background-color: ${props => props.theme.backgroundSecondary};
	color: #FFF;
	padding: 10px;
	position: relative;
	ul{
		list-style: none;
		padding: 0;
		margin: 0;
		position: relative;
		width: 90px;
		li{
			padding: 5px 0 0;
			position: relative;
			span{
				position: absolute;
				right: 0;
			}
		}
	}
	h4{
		font-size: 16px;
		font-weight: 400;
		margin: 0;
		color: ${props => props.theme.positive};
	}
	label{
		font-size: 12px;
		color: #ababd6;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		display: block;
		width: 180px;
	}
	div{
		display:flex;
	}
`;



class QuoteTile extends React.Component<QuoteTileProps, void> {

	private renderChangeColor(value: string) {
		let color = parseFloat(value) >= 0 ? '#27d815' : '#d84e4e';
		return <span style={{ color: color }}>{value}</span>;
	}

	private testClick() {
		console.log('test click');
	}

	render() {
		return (
			<Tile>
				<Flex row spaceBetween>
					<h4>{this.props.symbol} </h4>
					<span>{this.renderChangeColor(this.props.change)}</span>
					<span>{this.renderChangeColor(this.props.changePercent)}</span>
				</Flex>
				<label>{this.props.name}</label>
				<Flex row>
					<ul>
						<li>Ask: <span>{this.props.ask}</span></li>
						<li>Bid: <span>{this.props.bid}</span></li>
					</ul>
				</Flex>
				<CrossButton onClick={() => this.testClick()} />
			</Tile>
		);
	}
}

export default QuoteTile;