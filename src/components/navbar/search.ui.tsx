import * as React from 'react';
import SearchModel from './search.model';
import styled from 'styled-components';
import { observer } from 'mobx-react';

const StyledInput = styled.input`
	width: 100%;
	height: 50px;
	font-size: 42px;
	padding-left: 10px;
	color: #FFF;
	border: none;
	background: transparent;
	font-weight: bold;
	transition: all 0.25s ease-out;

	&+span{
		height: 2px;
		width: 100%;
		background: ${ props => props.theme.highlight};
		display: block;
		>span{
			transition: max-width 0.25s ease-out;
			background: #7facf9;
			height: 2px;
			max-width: 0%;
			display: block;
			width: 100%;
		}
		/** right span */
		&+span{
			height: 52px;
			display: block;
			width: 2px;
			position: absolute;
			right: 0;
			background: ${ props => props.theme.highlight};
			top: 0;
			>span{
				transition: max-height 0.25s ease-out;
				background: #7facf9;
				height: 2px;
				max-height: 0%;
				display: block;
				height: 100%;
			}
			/** top span */
			&+span{
				height: 2px;
				width: 100%;
				background: #7facf9;
				position: absolute;
				top: 0;
				>span{
					transition: max-width 0.25s ease-out;
					background: ${ props => props.theme.highlight};
					height: 2px;
					max-width: 100%;
					display: block;
					width: 100%;
				}
				/** left span */
				&+span{
				height: 52px;
				display: block;
				width: 2px;
				position: absolute;
				left: 0;
				background: #7facf9;
				top: 0;
					>span{
						transition: max-height 0.25s ease-out;
						background: ${ props => props.theme.highlight};
						height: 2px;
						max-height: 100%;
						display: block;
						height: 100%;
					}
				}
			}
		}
	}

	&:focus{
		outline: none;
		color: #7facf9;
		&+span{
			&>span{
				max-width: 100%;
			}
			&+span{
				&>span{
					max-height: 100%;
				}
				&+span{
					&>span{
						max-width: 0%;
					}
					&+span{
						&>span{
							max-height: 0%;
						}
					}
				}
			}
		}
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

		if (key && key === 13) {
			this.props.model.sendSearch();
		}
	}

	render() {
		return (
			<div>
				<StyledInput placeholder='Search for a stock' type='text' onChange={(value) => this.onChange(value)}
					onKeyPress={(e) => this.onApply(e.charCode)} />
				<span><span></span></span>
				<span><span></span></span>
				<span><span></span></span>
				<span><span></span></span>
			</div>
		);
	}
}
export default Search;