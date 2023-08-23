import React from 'react';

export default function Navbar(props) {
  return (
    <nav>
      <h4 className="nav--title">
        <img src={`../images/${props.logo}`} className="nav--logo" />
        {props.title}
      </h4>
    </nav>
  );
}
