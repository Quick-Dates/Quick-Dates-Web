import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import ActivitiesList from '../pages/ActivitiesList';
import Help from '../pages/Help';
import Login from '../pages/Login';

const Routes: FC = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/activities" component={ActivitiesList} />
    <Route path="/help" component={Help} />
  </Switch>
);

export default Routes;
