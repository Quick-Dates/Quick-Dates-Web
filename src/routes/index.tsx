import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import ActivitiesList from '../pages/ActivitiesList';
import Help from '../pages/Help';
import Login from '../pages/Login';
import Time from '../pages/Time';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/activities" component={ActivitiesList} />
      <Route path="/help/:user" component={Help} />
      <Route path="/time" component={Time} />
    </Switch>
  );
}
