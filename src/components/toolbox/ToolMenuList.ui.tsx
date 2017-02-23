import * as React from 'react';
import styled from 'styled-components';
import ToolMenuItem from './ToolMenuItem.ui';
import ToolMenuItemModel from './ToolMenuItem.model';
import ToolMenuStore from './ToolMenu.store';
export interface IToolMenuList {

	className?: string;
}

class ToolMenuList extends React.Component<IToolMenuList, {}> {

	private toolMenuItems = () => {

		console.log('rendering toolMenuItems');
		let menuItems = ToolMenuStore.menuItems;
		console.log(menuItems);
		return  ToolMenuStore.menuItems.map((item: ToolMenuItemModel, index) => {
			return	<ToolMenuItem model={item} key={index}/>;
		});

	}

	render() {
		return (
			<aside className={this.props.className}>
				<ul >
					{this.toolMenuItems()}
				</ul>
			</aside>
		);
	}
}


const toolMenuList = styled(ToolMenuList)`
	
	background-color: #3f4652;
	width: 300px;

	ul{
		background-color: #272c33;
		list-style: none;
		padding-left: 0;
		display: flex;
		flex-direction: column;
		width: 75px;
	}
`;

export default toolMenuList;