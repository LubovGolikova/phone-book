import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
// "id": string, - required
// "isActive": boolean, - required
// "age": number, (от 1 до 120)
// "name": {
//   "first": string, - required
//   "last": string, - required
// },
// "company": string,
//   "email": string,
//   "phone": string, // format - "+1 (974) 540-2046", - required (11 цифр начиная с 1)
//   "address": string,
//   "registered":  string - required

export default function AddPhone() {
    return (
        <div>
            <div className="container">
                <h1>Add phone</h1>
                <Form action="">
                    <FormGroup row className="mt-3">
                        <Label for="first" sm={1}>First name</Label>
                        <Col sm={3}>
                            <Input type="text" name="first" id="first" placeholder="Enter First Name"/>
                        </Col>
                    </FormGroup>
                    <FormGroup row className="mt-3">
                        <Label for="last" sm={1}>Last name</Label>
                        <Col sm={3}>
                            <Input type="text" name="last" id="last" placeholder="Enter Last Name"/>
                        </Col>
                    </FormGroup>
                    <FormGroup row className="mt-3">
                        <Label for="age" sm={1}>Age</Label>
                        <Col sm={3}>
                            <Input type="text" name="age" id="age" placeholder="Enter age"/>
                        </Col>
                    </FormGroup>
                    <FormGroup row className="mt-3">
                        <Label for="company" sm={1}>Company</Label>
                        <Col sm={3}>
                            <Input type="text" name="company" id="company" placeholder="Enter company name"/>
                        </Col>
                    </FormGroup>
                    <FormGroup row className="mt-3">
                        <Label for="email" sm={1}>Email</Label>
                        <Col sm={3}>
                            <Input type="email" name="email" id="email" placeholder="Enter email"/>
                        </Col>
                    </FormGroup>
                    <FormGroup row className="mt-3">
                        <Label for="phone" sm={1}>Phone</Label>
                        <Col sm={3}>
                            <Input type="phone" name="phone" id="phone" placeholder="Enter phone"/>
                        </Col>
                    </FormGroup>
                    <FormGroup row className="mt-3">
                        <Label for="address" sm={1}>Address</Label>
                        <Col sm={3}>
                            <Input type="text" name="address" id="address" placeholder="Enter address"/>
                        </Col>
                    </FormGroup>
                    <FormGroup row  className="mt-3">
                        <Label for="isActive"  sm={1}>Active</Label>
                        <Col sm={3}>
                            <Input className="mt-2" type="checkbox" name="isActive" id="isActive"/>
                        </Col>
                    </FormGroup>
                    <FormGroup check row className="mt-3">
                        <Col sm={{size: 10, offset: 2}}>
                            <Button>Add phone</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        </div>
    );
}