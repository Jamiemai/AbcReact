import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './common';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {
  SignupSimple as SignupSimpleView,
  SigninForm as SigninView,
  UserInfo as UserInfoView,
  Dashboard as DashboardView,
} from './views';

const Routes = () => {
  return (
    <Switch>
      <RouteWithLayout
        component={SignupSimpleView}
        exact
        layout={MainLayout}
        path="/signup"
      
       />
      <RouteWithLayout
        component={UserInfoView}
        exact
        layout={MainLayout}
        path="/user-info"
      
       />

        <RouteWithLayout
        component={SigninView}
        exact
        layout={MainLayout}
        path="/signin"
      
       />
               <RouteWithLayout
        component={DashboardView}
        exact
        layout={MainLayout}
        path="/dashboard"
      
       />
       <Redirect to="/signin" /> */}
    </Switch>
  );
};

export default Routes;
