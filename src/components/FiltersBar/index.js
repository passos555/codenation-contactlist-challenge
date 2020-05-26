import React, { Component } from 'react';

import Filter from '../Filter';

import { Container, Search } from './styles';

export default class FiltersBar extends Component {
  state = {
    filters: [
      'Nome', 
      'País', 
      'Empresa', 
      'Departamento', 
      'Data de admissão']
  }

  render() {
    const { filters } = this.state;

    return (
      <Container>
        <Search>
          <input type="text" placeholder="Pesquisar" />

          <button>
            <i className="fa fa-search"/>
          </button>
        </Search>

        {filters.map((filter) => (
          <Filter key={filter}>{filter}</Filter>
        ))}    
      </Container>
    );
  }
}