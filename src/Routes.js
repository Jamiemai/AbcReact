import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './common';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {
  Home as HomeView,
  SignupSimple as SignupSimpleView,
  NotFound as NotFoundView,
  AboutUs as AboutUsView,
  SigninForm as SigninView,
  UserInfo as UserInfoView,
} from './views';

const Routes = () => {
  return (
    <Switch>
      {/* <Redirect exact from="/" to="/home" />
      <RouteWithLayout
        component={HomeView}
        exact
        layout={MainLayout}
        path="/home"
      /> */}
        {/* <RouteWithLayout
        component={AboutUsView}
        exact
        layout={MainLayout}
        path="/about-us"
      /> */}

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
       <Redirect to="/signin" /> */}
       {/* <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MinimalLayout}
        path="/not-found"
      />
      <Redirect to="/not-found" status="404" /> */}
    </Switch>
  );
};

export default Routes;
