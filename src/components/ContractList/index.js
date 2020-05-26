import React, { Component } from "react";

import { Container, TableHeader } from './styles';

import Contact from '../Contact';

class Contacts extends Component {
	state = {
    headers: [
			'Nome', 
			'Telefone',
			'País', 
			'Admissão',
      'Empresa', 
			'Departamento'],
		contacts: []
	}
	
	componentDidMount() {
		fetch('https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts')
		.then((response) => response.json()) // Transform the data into json
  	.then((data) => {
			this.setState({ contacts: data });
    })
	}

	render() {
		const { headers, contacts } = this.state;

		return (
		<Container>

			<TableHeader>
				<span></span>
				{headers.map((header) => (
					<span key={header}>{header}</span>
				))} 
			</TableHeader>
			

			{contacts && (
				contacts.map((contact) => (
					<Contact key={contact.id} contact={contact}/>
				))
			)}

		</Container>
		);
	}
}

export default Contacts;
