import React from 'react';
import { BrowserRouter, Switch ,Route, Redirect } from 'react-router-dom';
import BadgeNew from '../pages/badgeNew'  
import Badges from '../pages/Badges'
import NotFound from '../pages/NotFound'
import Layout from './Layout';
import Home from '../pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/Home" component={Home} />
          <Route exact path="/Home/Badges" component={Badges} />
          <Route exact path="/Home/Badges/new" component={BadgeNew} />
          <Route exact path="/404" component={NotFound} />
          <Redirect from="*" to="/404" />
          
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App;
