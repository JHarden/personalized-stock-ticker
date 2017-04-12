import * as React from 'react';
import SearchModel from './search.model';
import styled from 'styled-components';
import { observer } from 'mobx-react';

const StyledInput = styled.input`

	width: 200px;
	height: 20px;
`;

interface SearchProps {
	model: SearchModel;
}

@observer
class Search extends React.Component<SearchProps, void> {

	private onChange(input: React.FormEvent<HTMLInputElement>) {
		this.props.model.setSearch(input.currentTarget.value);
	}

	private onClick() {
		this.props.model.sendSearch();
	}

	render() {
		const { model } = this.props;
		return (
			<div>
				<StyledInput type='text' onChange={(value) => this.onChange(value)} />
				<button onClick={() => this.onClick()}>Search! </button>
			</div>
		);
	}
}
export default Search;