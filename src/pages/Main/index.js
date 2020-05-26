import React, { Component } from 'react';

import Topbar from '../../components/Topbar';
import FiltersBar from '../../components/FiltersBar';
import ContactList from '../../components/ContractList';

import '../../App.scss';

export default class Main extends Component {
  render() {
    return (
      <>
        <Topbar/>
        <FiltersBar/>
        <ContactList/>
      </>
    );
  }
}