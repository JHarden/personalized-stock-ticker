import * as React from 'react';
import styled from 'styled-components';
// import Mail from 'react-icons/lib/md/mail';
interface ClearButtonProps {
	onClick: () => void;
}

const Clear = styled.button`

	appearance: none;
	outline: none;
	border: none;

	height: 30px;
	width: 30px;
	background: #EBEBEB;
	display: block;

`;

class ClearButton extends React.Component<ClearButtonProps, void> {

	render() {
		return (
			<div>
				<Clear onClick={() => this.props.onClick()}>Clear</Clear>
			</div>
		);
	}
}

export default ClearButton;