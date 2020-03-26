import React from 'react';
import './styles.css';

import Form from './form';
import Items from './items';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      items: [ "Eggs", "Milk", "Toilet Paper" ]
    }
  }

  handleChange = event => {
    // Update value during onChange
    this.setState({ value: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState(state => {
      // Add array value without mutating state
      const items = [...state.items, state.value];
      return {
        value: '', // reset
        items // replace
      }
    })
  }

  handleDelete = item => {
    this.setState(state => {
      // Remove the unwanted item by element name
      const items = state.items.filter(value => item !== value);
      return {
        value: '', // reset
        items // replace
      }
    })
  }

  render() {
    return (
      <div className="app">
        <h1>State Management Using React Components</h1>
        <h2>A friendly to do list example</h2>
        <Form handleChange={this.handleChange} handleSubmit={this.handleSubmit} value={this.state.value} />
        <Items handleDelete={this.handleDelete} items={this.state.items} />
      </div>
    )
  }
}

export default App;
