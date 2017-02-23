import { observable } from 'mobx';
import { observer } from 'mobx-react';
import ToolMenuItemModel from './ToolMenuItem.model';

class ToolMenuStore {

	@observable menuItems: Array<ToolMenuItemModel>;

	constructor() {
		this.menuItems = this.initMenuItems();
	}

	private initMenuItems(): Array<ToolMenuItemModel> {

		console.log('init menu items');
		let menuItems: ToolMenuItemModel[] =
			[new ToolMenuItemModel('Search'),
			new ToolMenuItemModel('Tickers'),
			new ToolMenuItemModel('options')];

		return menuItems;
	}

}

export default new ToolMenuStore();