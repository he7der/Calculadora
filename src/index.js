import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './main/Calculator';

ReactDOM.render(
  <div>
    <h1>Calculadora</h1>
    <Calculator/>
  </div>
  , document.getElementById('root'));

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Calculator />
//   </React.StrictMode>
// );
