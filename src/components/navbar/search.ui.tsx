import * as React from 'react';
import SearchModel from './search.model';
import styled from 'styled-components';
import { observer } from 'mobx-react';

const StyledInput = styled.input`
    width: 100%;
    height: 50px;
    font-size: 45px;
    color: #FFF;
    border: none;
	background: transparent;
	border-bottom: 2px solid ${ props => props.theme.highlight};
	font-weight: bold;

	&:focus{
		outline: none;
	}

	&::-webkit-input-placeholder { /* WebKit, Blink, Edge */
   	color: ${ props => props.theme.highlight};
	}

	&:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
		color: ${ props => props.theme.highlight};
		opacity:  1;
	}

	&::-moz-placeholder { /* Mozilla Firefox 19+ */
		color: ${ props => props.theme.highlight};
		opacity:  1;
	}

	&:-ms-input-placeholder { /* Internet Explorer 10-11 */
		color: ${ props => props.theme.highlight};
	}

	&::-ms-input-placeholder { /* Microsoft Edge */
		color: ${ props => props.theme.highlight};
	}
}
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
		if (key && key === 13) {
			this.props.model.sendSearch();
		} else {
			// this.props.model.sendSuggestion();
		}
	}

	render() {
		return (
			<div>
				<StyledInput placeholder='Search for a stock' type='text' onChange={(value) => this.onChange(value)}
					onKeyPress={(e) => this.onApply(e.charCode)} />
			</div>
		);
	}
}
export default Search;