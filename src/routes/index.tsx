import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ActivitiesList from '../pages/ActivitiesList';
import Help from '../pages/Help';
import Login from '../pages/Login';
import NotFound404 from '../pages/NotFound404';
import Time from '../pages/Time';
import ScheduleActivity from '../pages/ScheduleActivity';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/activities" component={ActivitiesList} />
      <Route path="/help/:user" component={Help} />
      <Route path="/time" component={Time} />
      <Route path="/schedule-activity" component={ScheduleActivity} />-
      <Route path="*" component={NotFound404} />
    </Switch>
  );
}
