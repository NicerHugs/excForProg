// import the stylesheet. this is necessary so that webpack will compile all the sass into css and then build it into our style.css file
import './../styles/main.scss';

import React from 'react';
import {render} from 'react-dom';

import App from './components/app.js';

render(
  <App/>,
  document.getElementById('app')
);
