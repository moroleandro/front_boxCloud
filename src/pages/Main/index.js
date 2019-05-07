import React, { Component } from 'react';
import api from '../../services/api';

import  './styles.css';
import logo from '../../assets/logo.png'


export default class Main extends Component {
  state = {
    newBox: '',
  };

  handleSubmit = async e => {
    e.preventDefault();

    const response = await api.post('boxes', {
      title: this.state.newBox
    });

    this.props.history.push(`/box/${response.data._id}`);
  };

  handleInputChange = (e) =>{
     this.setState({ newBox: e.target.value });
  }

  render() {
    return (
        <div id="main-container">
        <form onSubmit={this.handleSubmit}>
        <a href="https://br.linkedin.com/in/moroleandro" target="_blank">
          <img src={logo} alt="" id="logo-main"/>
          </a>
          <input value={this.state.newBox} onChange={this.handleInputChange} placeholder="Nome da box (pasta)" />
          <button type="submit">C R I A R</button>
        </form>
        </div>
  
    );
}
}
