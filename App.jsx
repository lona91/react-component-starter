import React from 'react';
import ReactDOM from 'react-dom';

import Component from './src'

const App = (props) => {
  return <>
    <Component /> 
  </>
}

ReactDOM.render(<App />, document.getElementById('app'));