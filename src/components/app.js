import React from "react"
import "./styles.css"

import Form from "./form"
import List from "./list"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: "",
      list: ["Eggs", "Milk", "Toilet Paper"],
    }
  }

  handleChange = event => this.setState({ value: event.target.value })
  handleDelete = value =>
    this.setState({
      list: this.state.list.filter(item => value !== item),
    })
  handleSubmit = event => {
    event.preventDefault()
    this.setState(state => {
      return {
        value: "",
        list: [...state.list, state.value],
      }
    })
  }

  render() {
    const { list, value } = this.state
    console.log(list)

    return (
      <div data-testid="app" className="app">
        <h1>State Management Using React Hooks</h1>
        <h2>A friendly to do list example</h2>
        <Form
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          value={value}
        />
        <List handleDelete={this.handleDelete} list={list} />
      </div>
    )
  }
}

export default App
