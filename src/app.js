import css from './app.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';

import $ from 'jquery';
import './jquery.changeStyle';

$("#hello").text('change to other text');
$("#hello").changeStyle('pink');

ReactDOM.render(
  <Root></Root>,
  document.getElementById('root')
);
