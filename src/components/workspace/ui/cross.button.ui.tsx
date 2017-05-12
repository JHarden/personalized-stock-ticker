import * as React from 'react';
import styled from 'styled-components';

const CustomButton = styled.button`

	width: 20px;
	height: 20px;
	display: block;
	appearance: none;
	border: 1px solid ${ props => props.theme.backgroundPrimary };
	background-color: ${ props => props.theme.backgroundPrimary };
	position: absolute;
	right: -10px;
	top: 50%;
	margin-top: -10px;
`;

const CrossButton = (props: { onClick: () => void }) => {
	return (
		<CustomButton onClick={props.onClick}> x </CustomButton>
	);
};

export default CrossButton;