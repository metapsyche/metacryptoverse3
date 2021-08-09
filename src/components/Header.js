import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <>
      <h1>Metacryptoverse</h1>
      <h2>{this.props.byline}</h2>
    </>
  }
}

export default Header;
