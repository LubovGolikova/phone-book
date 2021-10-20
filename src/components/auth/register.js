import {Col, Button, FormGroup, Label} from 'reactstrap';
import {useState, useRef} from "react";
import {isEmail} from "validator";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";


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
    console.log("gdfg");
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

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [formState, setFormState] = useState({email: '', password: ''});
    const {email, password} = formState;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const form = useRef();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const checkBtn = useRef();

    const onValueChange = (e) => {
        let value = e.target.value;
        let name = e.target.name;
        setFormState({...formState, [name]: value});
    };

    const handleRegister = (e) => {
        e.preventDefault();
        form.current.validateAll();
        localStorage.clear();
        localStorage.setItem('email', formState.email);
        localStorage.setItem('password', formState.password);
        console.log(localStorage);
    };

    return (
        <>
            <div className="container">
                <h1>Registration</h1>
                <Form onSubmit={handleRegister} ref={form}>
                    <FormGroup row className="mt-3">
                        <Label for="email" sm={1}>Email</Label>
                        <Col sm={3}>
                            <Input
                                type="email"
                                name="email"
                                id="email"
                                value={email}
                                onChange={onValueChange}
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
                                onChange={onValueChange}
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
                    <CheckButton style={{display: "none"}} ref={checkBtn}/>
                </Form>
            </div>
        </>
    );
};

export default Register;
