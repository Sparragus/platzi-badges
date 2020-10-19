import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './global.css';
import Badge from './components/Badge';

const container = document.getElementById('app');

ReactDOM.render(
  <Badge 
  avatar="https://www.gravatar.com/avatar?d=identicon"
  firstName="Aline" 
  lastName="De Castro Herculano" 
  jobTitle = "Fullstack Engineer" 
  twitter="yajairo87" />, 
  container);
