import {Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {useState, useRef} from "react";
import {isEmail} from "validator";
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
}
const vpassword = (value) => {
    let passwordValid = value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]{8,}$/);
    if (passwordValid) {
        return (
        <div className="alert alert-danger" role="alert">
            The password must be at least 8 characters, must contain at least 1 number, 1 capital letter and 1 small letter.
        </div>
        );
    }
};
export default function register() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [formState, setFormState] = useState({email:'',password:''});
    const { email, password} = formState;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const form = useRef();

    function onValueChange(e) {
        let value = e.target.value;
        let name = e.target.name;
        setFormState({...formState, [name]: value});
    }
    function handleRegister(e) {
        e.preventDefault();
        localStorage.clear();
        localStorage.setItem('email',formState.email);
        localStorage.setItem('password',formState.password);
        console.log(localStorage);
    }


    return (
        <>
            <div className="container">
                <h1>Registration</h1>
                <Form onSubmit={handleRegister} ref={form} >
                    <FormGroup row className="mt-3">
                        <Label for="email" sm={1}>Email</Label>
                        <Col sm={3}>
                            <Input
                                type="email"
                                name="email"
                                id="email"
                                value={email}
                                onChange={onValueChange}
                                validations={[required,validEmail]}
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
                                validation={[required, vpassword]}
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
}
