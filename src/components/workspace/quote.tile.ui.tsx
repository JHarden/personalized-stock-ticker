import * as React from 'react';
import styled from 'styled-components';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';

import Flex from '../generic/flex.ui';
import CrossButton from './ui/cross.button.ui';

interface QuoteTileProps {
	name: string;
	symbol: string;
	daysHigh: string;
	daysLow: string;
	change: string;
	onclick: (symbol: string) => void;
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
	cursor: pointer;
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

@observer
class QuoteTile extends React.Component<QuoteTileProps, void> {

	@observable private isActive: boolean = false;

	private renderChangeColor(value: string) {
		let color = parseFloat(value) >= 0 ? '#27d815' : '#d84e4e';
		return <span style={{ color: color }}>{value}</span>;
	}

	private testClick() {
		console.log('test click');
	}

	private renderActiveState = () => {
		return (
			this.isActive ? <CrossButton onClick={() => this.testClick()} /> : ''
		);
	}

	render() {
		return (
			<Tile onClick={() => this.props.onclick(this.props.symbol)}>
				<Flex row spaceBetween>
					<h4>{this.props.symbol} </h4>
					<span>{this.renderChangeColor(this.props.change)}</span>
				</Flex>
				<label>{this.props.name}</label>
				<Flex row>
					<ul>
						<li>Day High: <span>{this.props.daysHigh}</span></li>
						<li>Day Low: <span>{this.props.daysLow}</span></li>
					</ul>
				</Flex>
				{this.renderActiveState()}
			</Tile>
		);
	}
}

export default QuoteTile;