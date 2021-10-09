import React from 'react';
import {
  RouteProps as ReactDOMRouteProps,
  Route as ReactDOMRoute,
  Redirect,
} from 'react-router-dom';
import { useContextAuth } from '../Context/AuthContext';
import { ProfileEnum } from '../enum/profileEnum';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

function Route({
  isPrivate = false,
  component: Component,
  ...rest
}: RouteProps) {
  const { user } = useContextAuth();
  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => (isPrivate === !!user && location.pathname !== '/' ? (
        <Component />
      ) : (
        <Redirect
          to={{
            pathname: isPrivate ? '/signin' : user.profile === ProfileEnum.Student ? '/activities' : '/shedule-activity',
            state: { from: location },
          }}
        />
      ))}
    />
  );
}

export default Route;
