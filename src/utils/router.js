import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import SignInLayout from '../components/SignInLayout';
import SignIn from '../pages/SignIn';
import Signup from '../pages/Signup';



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
            </Switch>
            
        </BrowserRouter>
    )
}

export default Router
