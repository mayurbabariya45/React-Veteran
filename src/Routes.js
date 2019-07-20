import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './scenes/Home/Home';
import VeteranInformation from './scenes/Clients/VeteranInformation';

import NotFound from './scenes/NotFound';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/clients/veteran-information" component={VeteranInformation} />
      <Route path="*" component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
