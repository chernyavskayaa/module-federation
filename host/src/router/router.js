import React, { Suspense } from 'libs/react';
import { BrowserRouter, Switch, Route } from 'libs/react-router-dom';
import { Home } from '../components/Home';
import { Activity } from '../components/Activity';
import { Users } from '../components/Users';
import { routes } from '../constants/routes'

const Router = ({ children }) => {
  return <BrowserRouter>
    {children}
    <Suspense fallback={'loading...'}>
      <Route path={routes.home} exact>
        <Home />
      </Route>
      <Switch>
        <Route path={routes.users}>
          <Users />
        </Route>
        <Route path={routes.activity}>
          <Activity />
        </Route>
      </Switch>
    </Suspense>
  </BrowserRouter>
}

export { Router }