import * as React from 'react';

interface ClearButtonProps {
	onClick: () => void;
}

class ClearButton extends React.Component<ClearButtonProps, void> {

	render() {
		return (
			<button onClick={() => this.props.onClick()}>Clear History</button>
		);
	}
}

export default ClearButton;