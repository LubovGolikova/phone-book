import './App.css';
import React from "react";
import {BrowserRouter as Router, Redirect, Switch, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import {ROUTES} from "./components/constants/routes";
import Login from './components/auth/login';
import Register from './components/auth/register'

import Phones from './components/pages/phones';
import AddPhone from './components/pages/addPhone';
import EditPhone from "./components/pages/editPhone";
import Phone from './components/pages/phone';
import NotFound from './components/pages/notFound';


import RouterLink from './components/router/routerLink';


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
              <Route exact path={ROUTES.static.main} component={Phones}/>
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
