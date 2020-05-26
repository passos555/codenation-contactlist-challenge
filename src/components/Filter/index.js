import React, { Component } from 'react';

import { Button } from './styles';

class Filters extends Component {
	render() {
		const { children, isSelected } = this.props;

		return (
			<Button isSelected={!!isSelected}>
        {children} 
				<i className="fas fa-sort-down" />
      </Button>
		);
	}
}

export default Filters;
