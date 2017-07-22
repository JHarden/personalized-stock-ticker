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

	private onApply(key?: number) {
		// if (key && key !== 13)
		// 	return;else{}
		if( key && key === 13){
		this.props.model.sendSearch();
		}else {
			// this.props.model.sendSuggestion();
		}
	}

	render() {
		const { model } = this.props;
		return (
			<div>
				<StyledInput type='text' onChange={(value) => this.onChange(value)}
					onKeyPress={(e) => this.onApply(e.charCode)} />
				<button onClick={(e) => this.onApply()}>Search!</button>
			</div>
		);
	}
}
export default Search;