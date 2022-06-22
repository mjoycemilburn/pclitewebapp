import React from 'react';
import { DisplayWrapper } from './components/DisplayWrapper';

// Using Toastify for user messages - see https://medium.com/swlh/making-your-reactjs-user-friendly-with-toastify-6cc553f2b08b
// and https://fkhadra.github.io/react-toastify/introduction/

var TESTING = false; // set to true to run locally 

function App() {

  return (
    <div>
      <DisplayWrapper />
    </div>
  );
}

export  { App, TESTING };
