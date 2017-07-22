
import styled from 'styled-components';

interface FlexProps {

	row?: boolean;
	column?: boolean;
	center?: boolean;
	left?: boolean;
	right?: boolean;
	fill?: boolean;
	spaceBetween?: boolean;
}

const Flex = styled.div`
		display: flex;
		flex-direction: ${(props: FlexProps) => props.row ? 'row' : props.column ? 'column' : 'row'};
		align-items: ${ props => props.center ? 'center' : props.left ? 'flex-start' : props.right ? 'flex-end' : 'flex-start'};
		flex: 1;
		width: ${ props => props.fill ? '100%' : 'auto'};
		justify-content: ${ props => props.spaceBetween ? 'space-between' : 'flex-start'}
	`;

export default Flex;

