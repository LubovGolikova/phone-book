import {Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {Link, useHistory} from 'react-router-dom';
import {ROUTES} from "../../constants/routes";
import {useEffect, useState} from "react";
import {loginSuccess, authSelector} from "../redux/authSlice";
import {useDispatch, useSelector} from "react-redux";

const Login = () => {
    const dispatch = useDispatch();
    const {isSuccess, emailUser, isLoading} = useSelector(authSelector);

    let [formState, setFormState] = useState({email: '', password: ''});
    let {email, password} = formState;
    const history = useHistory();

    const onValueChange1 = (name) => (e) => {
        setFormState((prevState) => ({...prevState, [name]: e.target.value}));
    };

    const checkLogin = (e) => {
        e.preventDefault();
        const user = localStorage.getItem('user');
        if (user) {
            console.log(user);
        }
        dispatch(loginSuccess(formState.email));
    };

    useEffect(() => {
        if (emailUser !== '' && isSuccess) {
            history.push(ROUTES.static.main);
        }
    }, [emailUser, history, isSuccess]);

    useEffect(() => {
        if(isLoading) {
            return <span>Loading...</span>
        }
    },[isLoading]);

    return (
        <>
            <div className="container">
                <h1>Login</h1>
                <Form onSubmit={checkLogin} >
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