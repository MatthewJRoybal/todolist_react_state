import React from 'react';

const Form = ({ handleChange, handleSubmit, item }) => (
  <form>
    <input
      name="item"
      type="text"
      value={item}
      onChange={handleChange}
      placeholder="Enter an item"
    />
    <button type="submit" onClick={event => handleSubmit(event)}>Submit</button>
  </form>
)
