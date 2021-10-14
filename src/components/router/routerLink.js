import {Link} from "react-router-dom";
import React from "react";
import {ROUTES} from "../constants/routes";

export default function RouterLink() {
    return (
        <div>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <div className="container">
                    <div className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to={ROUTES.static.phones} className="nav-link">
                                Phone Book
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={ROUTES.static.add} className="nav-link">
                                Add
                            </Link>
                        </li>
                        <div className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to={ROUTES.static.login} className="nav-link">
                                    Login
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={ROUTES.static.register} className="nav-link">
                                    Registration
                                </Link>
                            </li>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}