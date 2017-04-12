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

	render() {
		const { model } = this.props;
		return (
			<StyledInput type='text' onChange={(value) => this.onChange(value)} />
		);
	}
}
export default Search;