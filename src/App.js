import './App.css';
import React from "react";
import Phones from './components/phones/Phones';
import Add from './components/add/Add';
import Login from './components/login/Login';
import Register from './components/register/Register'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// /login — страница авторизации
// /:id — просмотр одного телефона
// /add- добавление телефона
// /edit/:id — обновление телефона

function App() {
  return (
      <div>
        <Router>
          <div>
            <nav className="navbar navbar-expand navbar-dark bg-dark" >
              <div className="container">
                <div className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <Link to={"/phones"} className="nav-link">
                      Phone Book
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={"/add"} className="nav-link">
                      Add
                    </Link>
                  </li>
                  <div className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <Link to={"/login"} className="nav-link">
                        Login
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to={"/register"} className="nav-link">
                        Registration
                      </Link>
                    </li>
                  </div>
                </div>
              </div>
            </nav>

            <Switch>
              <Route path={'/phones'} render={()=>{return <Phones/>}}/>
              <Route path={'/add'} render={()=>{return <Add/>}}/>
              <Route path={'/login'} render={()=>{return <Login/>}}/>
              <Route path={'/register'} render={()=>{return <Register/>}}/>
            </Switch>
          </div>
        </Router>
      </div>
  );
}

export default App;
