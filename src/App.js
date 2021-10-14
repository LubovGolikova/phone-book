import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {ROUTES} from "./components/constants/routes";
import "bootstrap/dist/css/bootstrap.min.css";

import Phones from './components/pages/phones';
import AddPhone from './components/pages/addPhone';
import Login from './components/auth/login';
import Register from './components/auth/register'
import RouterLink from './components/router/routerLink';
import Phone from './components/pages/phone';

// /login — страница авторизации
// /:id — просмотр одного телефона
// /add- добавление телефона
// /edit/:id — обновление телефона

function App() {
  return (
      <div>
        <Router>
          <div>
            <RouterLink/>
            <Switch>
              <Route path={ROUTES.static.phones} component={Phones}/>
              <Route path={ROUTES.static.add} component={AddPhone}/>
              <Route path={ROUTES.static.login} component={Login}/>
              <Route path={ROUTES.static.register} component={Register}/>
              <Route path={ROUTES.dynamic.details()} component={Phone}/>
              <Route path={ROUTES.dynamic.edit()} component={Register}/>
            </Switch>
          </div>
        </Router>
      </div>
  );
}

export default App;
