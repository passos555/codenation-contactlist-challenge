import React, { Component } from 'react';

import { Container } from './styles';

import { ReactComponent as LogoSvg } from "../../assets/img/logo.svg";

export default class Topbar extends Component {
	render() {
		return (
			<Container>
				<div>
					<a href="/">
						<LogoSvg alt="Logo Instagram" />
					</a>
				</div>
			</Container>
		);
	}
}
