import * as React from 'react';
import styled from 'styled-components';
import Flex from '../generic/flex.ui';

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
		color: ${props => props.theme.primary};
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

	render() {
		return (
			<Tile>
				<Flex row spaceBetween>
					<h4>{this.props.symbol} </h4>
					<span>{this.props.change}</span>  <span>{this.props.changePercent}</span>
				</Flex>
				<label>{this.props.name}</label>
				<Flex row>
					<ul>
						<li>Ask: <span>{this.props.ask}</span></li>
						<li>Bid: <span>{this.props.bid}</span></li>
					</ul>
				</Flex>
			</Tile>
		);
	}
}

export default QuoteTile;