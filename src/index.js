// import React from 'react';
// import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.css';

// import './global.css';
// import App from './components/App';

// const container = document.getElementById('app');

// ReactDOM.render(<App />, container);


import React from 'react';

import ReactDOM from 'react-dom';

import Badge from './componets/Badge';
import './global.css';
import 'bootstrap/dist/css/bootstrap.css';


const container = document.getElementById('app');

ReactDOM.render(<Badge 
    firstName="Jose" 
    lastName="Brusa" 
    jobTitle="Frontend Engineer" 
    twitter="brusa_jose" 
    avatarUrl="https://s.gravatar.com/avatar/4133e43f063b9e916b24835664fa19e4?s=80"
    />, 
    container);

