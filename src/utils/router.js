import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import DashboardLayout from '../components/DashboardLayout';
import SignInLayout from '../components/SignInLayout';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import SignIn from '../pages/SignIn';
import Signup from '../pages/Signup';
import Workout from '../pages/Workout';



function RouteWrapper({ page: Page, layout: Layout, ...rest }) {
    return (
      <Route
        {...rest}
        render={(props) => (
           
          <Layout {...props}>
              
            <Page {...props} />
          </Layout>
        )}
      />
    );
  }
function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <RouteWrapper path="/sign-in"  layout={SignInLayout} page={SignIn}/>
                <RouteWrapper path="/sign-up"  layout={SignInLayout} page={Signup}/>
                <RouteWrapper exact path="/"  layout={DashboardLayout} page={Dashboard}/>
                <RouteWrapper path="/workout"  layout={DashboardLayout} page={Workout}/>
                <RouteWrapper path="/profile"  layout={DashboardLayout} page={Profile}/>
            </Switch>
            
        </BrowserRouter>
    )
}

export default Router
