import {Col, Button, FormGroup, Label} from 'reactstrap';
import React, {useState, useEffect} from "react";
import {isEmail} from "validator";
import {useSelector, useDispatch} from "react-redux";
import {loginSuccess, authSelector} from '../redux/authSlice';
import { useHistory } from 'react-router-dom';

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import {ROUTES} from "../../constants/routes";

const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};
const validEmail = (value) => {
    if (!isEmail(value)) {
        return (
            <div className="alert alert-danger" role="alert">
                This is not a valid email.
            </div>
        );
    }
};
const validPassword = (value) => {
    let passwordValid = value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]{8,}$/);
    if (passwordValid) {
        return (
            <div className="alert alert-danger" role="alert">
                The password must be at least 8 characters, must contain at least 1 number, 1 capital letter and 1 small
                letter.
            </div>
        );
    }
};

const Register = () => {
    const dispatch = useDispatch();
    const {isSuccess, emailUser} = useSelector(authSelector);
    const history = useHistory();

    const [formState, setFormState] = useState({email: '', password: ''});
    const {email, password} = formState;

    console.log(isSuccess, emailUser);

    const onValueChange1 = (name) => (e) => {
        setFormState((prevState) => ({...prevState, [name]: e.target.value}));
    };

    const handleRegister = (e) => {
        e.preventDefault();

        const user = localStorage.getItem('email');
        if (user) {
            console.log(user);
        }
        dispatch(loginSuccess(formState.email));
    };

    useEffect(() => {
        if (emailUser) {
            history.push(ROUTES.static.main);
        }
    }, [emailUser, history]);

    return (
        <>
            <div className="container">
                <h1>Registration</h1>
                <Form onSubmit={handleRegister} >
                    <FormGroup row className="mt-3">
                        <Label for="email" sm={1}>Email</Label>
                        <Col sm={3}>
                            <Input
                                type="email"
                                name="email"
                                id="email"
                                value={email}
                                onChange={onValueChange1('email')}
                                validations={[required, validEmail]}
                                placeholder="Enter email"
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row className="mt-3">
                        <Label for="password" sm={1}>Password</Label>
                        <Col sm={3}>
                            <Input
                                type="password"
                                name="password"
                                id="password"
                                value={password}
                                onChange={onValueChange1('password')}
                                validation={[required, validPassword]}
                                placeholder="Enter password"
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup check row className="mt-3">
                        <Col sm={{size: 10, offset: 2}}>
                            <Button>Register</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        </>
    );
};

export default Register;
