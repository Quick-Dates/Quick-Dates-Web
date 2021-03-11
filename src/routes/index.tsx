import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import ActivitiesList from '../pages/ActivitiesList';
import Login from '../pages/Login';

const Routes: FC = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/activities" component={ActivitiesList} />
  </Switch>
);

export default Routes;
