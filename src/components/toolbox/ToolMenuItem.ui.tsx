import * as React from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';
import ToolMenuItemModel from './ToolMenuItem.model';

export interface IToolMenuItem {

	model: ToolMenuItemModel;
	className?: string;
}

@observer
class ToolMenuItem extends React.Component<IToolMenuItem, {}> {

	render() {

		const model = this.props.model;

		return (
			<li className={this.props.className}>
				{model.getName()}
			</li>
		);
	}
}


const toolMenuItem = styled(ToolMenuItem)`
	
	font-family: Arial, Helvetica, sans-serif;
	color: #ccc8c8;
	width: 75px;
	height: 75px;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.15s ease-out;
	cursor: pointer;

	&:hover{
		color: #f18686;
	}
`;

export default toolMenuItem;