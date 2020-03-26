import React from 'react';
import './styles.css';

import From from './form';
import Item from './item';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      items: [ "Toilet Paper" ]
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

  handleDelete = () => {
    console.log("delete");
  }

  render() {
    return (
      <React.Fragment>
        <h1>A to do list using React state management</h1>
        <Form handleChange={this.handleChange} handleSubmit={this.handleSubmit} value={this.state.value} />
        <ul>
          <Item items={this.state.items} />
        </ul>
      </React.Fragment>
    )
  }
}

export default App;
