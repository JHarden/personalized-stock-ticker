import * as React from 'react';
import styled from 'styled-components';
import { Hero } from './hero';
import { observer } from 'mobx-react';

export interface IHeroStatProps {
	className?: string;
	attr: string;
	attrVal: number;
}

class HeroStat extends React.Component<IHeroStatProps, {}> {

	private calculateModifier(stat: number) {

		let diff: number = Math.floor((stat - 10) / 2);

		let modifierLabel: string = diff > 0 ? 'positive' : diff < 0 ? 'negative' : '';

		return(
			<span className={`modifier ` + modifierLabel}>{diff}</span>
		);
	}


	render() {
		return (
			<li className={this.props.className}>
				<span className='attr'>{this.props.attr}</span><span className='value'>{this.props.attrVal}</span>
				{this.calculateModifier(this.props.attrVal)}
			</li>
		);
	}
}

const StyledHeroStat = styled(HeroStat)`

	background: rgb(232, 207, 163);
	width: 115px;
	margin: 3px 0;
	font-size: 20px;
	position: relative;
	padding-left: 5px;

	.modifier{
		
		position: absolute;
		right: 5px;
		width: 30px;
		text-align: center;

		&.positive{
			background: #55b355;
		}

		&.negative{
			background: #ff5454;
		}
	}

	.value {
		margin-left: 10px;
		font-size: 20px;
		font-weight: bold;
		color: #9e8353;
	}
`;

export default StyledHeroStat;