import * as React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';
import { computed } from 'mobx';

import Flex from '../common/flex.ui';
import CrossButton from './ui/cross.button.ui';

interface QuoteTileProps {
	name: string;
	symbol: string;
	daysHigh: string;
	daysLow: string;
	change: string;
	onclick: (symbol: string) => void;
	isActive: boolean;
	lastTrade: string;
}


const Tile = styled.div`
	height: 75px;
	width: 250px;
	border-top: 1px solid ${props => props.theme.backgroundPrimary};
	border-bottom: 1px solid ${props => props.theme.backgroundPrimary};
	font-size: 12px;
	text-align: left;
	background-color: ${props => props.theme.backgroundSecondary};
	color: #FFF;
	padding: 10px;
	position: relative;
	cursor: pointer;

	&:hover{
		background-color: ${props => props.theme.highlight};
	}

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
		color: ${props => props.theme.fontColor};
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		display: block;
		width: 250px;
	}
	div{
		display:flex;
	}
`;

const LastTrade = styled.div`
	position: absolute;
	bottom: 15px;
	right: 5px;
	font-size: 20px;
`;

@observer
class QuoteTile extends React.Component<QuoteTileProps, void> {

	@computed get changeColor() {
		return parseFloat(this.props.change) >= 0 ? '#27d815' : '#d84e4e';
	}

	private testClick() {
		console.log('test click');
	}

	private renderActiveState = () => {
		return (
			this.props.isActive ? <CrossButton onClick={() => this.testClick()} /> : ''
		);
	}

	render() {

		const { onclick, symbol, change, name, daysHigh, daysLow, lastTrade } = this.props;
		return (
			<Tile onClick={() => onclick(symbol)}>
				<Flex row spaceBetween>
					<h4>{symbol} </h4>
					<span style={{ color: this.changeColor }}>{change}</span>
				</Flex>
				<label>{name}</label>
				<Flex row>
					<ul>
						<li>Day High: <span>{daysHigh}</span></li>
						<li>Day Low: <span>{daysLow}</span></li>
					</ul>
					<LastTrade style={{ color: this.changeColor }}>{lastTrade}</LastTrade>
				</Flex>
				{this.renderActiveState()}
			</Tile>
		);
	}
}

export default QuoteTile;