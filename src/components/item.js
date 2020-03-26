import React from 'react';

const Item = ({ items }) => (
  items.map((item, index) => (
    <li>
      {item}
    </li>
  ))
)

export default Item;
