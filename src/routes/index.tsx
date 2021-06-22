import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ActivitiesList from '../pages/ActivitiesList';
import Login from '../pages/Login';
import NotFound404 from '../pages/NotFound404';
import Time from '../pages/Time';
import ScheduleActivity from '../pages/ScheduleActivity';
import EditActivity from '../pages/EditActivity';
import Ranking from '../pages/Ranking';
import Grade from '../pages/Grade';
import ActitvityDetails from '../pages/ActivityDetails';
/* eslint-disable quotes */

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/activities" component={ActivitiesList} />
      <Route path="/time" component={Time} />
      <Route path="/grades" component={Grade} />
      <Route path="/activity-details" component={ActitvityDetails} />
      <Route path="/shedule-activity" component={ScheduleActivity} />-
      <Route path="/edit-activity" component={EditActivity} />
      <Route path="/ranking" component={Ranking} />
      <Route path="*" component={NotFound404} />
    </Switch>
  );
}
