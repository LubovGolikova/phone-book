import {Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {Link} from 'react-router-dom';
import {ROUTES} from "../constants/routes";
import {useState, useRef} from "react";

const Login = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    let [formState, setFormState] = useState({email: '', password: ''});
    let {email, password} = formState;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const form = useRef();

    const onValueChange1 = (name) => (e) => {
        setFormState((prevState) => ({...prevState, [name]: e.target.value}));
    };

    const checkLogin = (e) => {
        e.preventDefault();
        const user = localStorage.getItem('user');
        console.log(user);
        if(user.includes(',')) {
            let words = user.split(',');
            let email = words[0];
            let password = words[1];
            console.log(email,"!!!",password);
        }

        if (formState.email === email && formState.password === password) {
            console.log("login");
        } else {
            console.log("not login");
        }
    };

    return (
        <>
            <div className="container">
                <h1>Login</h1>
                <Form onSubmit={checkLogin} ref={form}>
                    <FormGroup row className="mt-3">
                        <Label for="email" sm={1}>Email</Label>
                        <Col sm={3}>
                            <Input
                                type="email"
                                name="email"
                                id="email"
                                value={email}
                                onChange={onValueChange1('email')}
                                placeholder="Enter email"/>
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
                                placeholder="Enter password"/>
                        </Col>
                    </FormGroup>
                    <FormGroup check row className="mt-3">
                        <Col sm={{size: 10, offset: 2}}>
                            <Button>Login</Button>
                            <Link to={ROUTES.static.register} className="btn btn-link">Register</Link>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        </>
    );
};

export default Login;