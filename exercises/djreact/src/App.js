import React from 'react';
import './App.css';
import Square from './Square'

const App = (props) => {
  const mappedSquares = props.colors.map((color) => <Square color={props.colors} />)
  return (
    <>
    {mappedSquares}
    </>
  )
}

export default App;
