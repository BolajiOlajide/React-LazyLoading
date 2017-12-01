import React from 'react';
import { Link } from 'react-router-dom'

const button = {
  backgroundColor: 'white',
  padding: 10,
  color: 'black',
  borderRadius: 1,
  borderColor: 'black',
  borderWidth: 2,
  borderStyle: 'solid'
}

const Button = ({link, name}) => {
  return (
    <Link to={link}>
      <span style={button}>{name}</span>
    </Link>
  )
}

export default Button;
