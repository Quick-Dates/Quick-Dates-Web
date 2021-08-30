import React from 'react';
import { Switch } from 'react-router-dom';
import ActivitiesList from '../pages/ActivitiesList';
import Login from '../pages/Login';
import NotFound404 from '../pages/NotFound404';
import Time from '../pages/Time';
import ScheduleActivity from '../pages/ScheduleActivity';
import EditActivity from '../pages/EditActivity';
import Ranking from '../pages/Ranking';
import Grade from '../pages/Grade';
import ActitvityDetails from '../pages/ActivityDetails';
import Route from './Route';
/* eslint-disable quotes */

export default function Routes() {
  return (
    <Switch>
      <Route path="/signin" exact component={Login} />
      <Route path="/activities" component={ActivitiesList} isPrivate />
      <Route path="/time" component={Time} isPrivate />
      <Route path="/grades" component={Grade} isPrivate />
      <Route path="/activity-details" component={ActitvityDetails} isPrivate />
      <Route path="/shedule-activity" component={ScheduleActivity} isPrivate />-
      <Route path="/edit-activity" component={EditActivity} isPrivate />
      <Route path="/ranking" component={Ranking} isPrivate />
      <Route path="*" component={NotFound404} isPrivate />
    </Switch>
  );
}
