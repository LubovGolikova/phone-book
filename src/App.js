import './App.css';
import React from "react";
import {BrowserRouter as Router, Redirect, Switch, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import {ROUTES} from "./features/constants/routes";
import Login from './features/auth/component/login';
import Register from './features/auth/component/register'

import PhonesList from './features/pages/phoneList/component/phonesList';
import AddPhone from './features/pages/phone/component/addPhone';
import EditPhone from "./features/pages/phone/component/editPhone";
import Phone from './features/pages/phone/component/phone';
import NotFound from './features/pages/error/notFound';
import RouterLink from './features/router/routerLink';

function App() {
  return (
      <div>
        <Router>
          <div>
            <RouterLink/>
            <Switch>
              <Route exact path={ROUTES.static.main} component={PhonesList}/>
              <Route exact path={ROUTES.static.add} component={AddPhone}/>
              <Route exact path={ROUTES.static.login} component={Login}/>
              <Route exact path={ROUTES.static.register} component={Register}/>
              <Route exact path={ROUTES.dynamic.details()} component={Phone}/>
              <Route exact path={ROUTES.dynamic.edit()} component={EditPhone}/>
              <Route exact path={ROUTES.static.edit} component={EditPhone}/>
              <Redirect to={ROUTES.static.notFound} component={NotFound} />
            </Switch>
          </div>
        </Router>
      </div>
  );
}

export default App;
