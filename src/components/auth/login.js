import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import {ROUTES} from "../constants/routes";

export default function Login() {
    return (
        <div className="container">
            <h1>Login</h1>
            <Form action="">
                <FormGroup row className="mt-3">
                    <Label for="email" sm={1}>Email</Label>
                    <Col sm={3}>
                        <Input type="email" name="email" id="email" placeholder="Enter email"/>
                    </Col>
                </FormGroup>
                <FormGroup row className="mt-3">
                    <Label for="password" sm={1}>Password</Label>
                    <Col sm={3}>
                        <Input type="password" name="password" id="password" placeholder="Enter password"/>
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
    );
}