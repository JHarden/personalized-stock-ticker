import * as React from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';


import BaseModel from '../BaseModel';


interface WorkspaceProps {
	model: BaseModel;
}

const StyledWorkspace = styled.div`

	display: flex;
	width: 100%;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	align-content: center;
	font-family: HelveticaNeue, Arial, sans-serif;

`;

@observer
class Workspace extends React.Component<WorkspaceProps, void> {

	render() {
		const { model } = this.props;
		return (
			<StyledWorkspace>
				<div>
					<h2>workspace</h2>
				</div>
				<div>
					{this.props.model.searchModel.searchString}
				</div>
			</StyledWorkspace>
		);
	}
}

export default Workspace;