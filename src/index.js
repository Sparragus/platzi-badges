import React from 'react';

import ReactDOM from 'react-dom';

// import Badge from './componets/Badge';
import './global.css';
import 'bootstrap/dist/css/bootstrap.css';
import BadgeNew from './pages/BadgeNew';
import Badges from './pages/Badges';


const container = document.getElementById('app');

ReactDOM.render(<Badges />,  container);

