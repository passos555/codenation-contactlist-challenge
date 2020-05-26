import React, { Component } from 'react';

import { Container } from './styles';

class Contact extends Component {
  render() {
    const { contact } = this.props;
    
    return (
      <Container>
        <img src={contact.avatar} alt="Contact Avatar"/>
        <span>{contact.name}</span>
        <span>{contact.phone}</span>
        <span>{contact.country}</span>
        <span>{contact.admissionDate}</span>
        <span>{contact.company}</span>
        <span>{contact.department}</span>
      </Container>
    );
  }
}

export default Contact;
