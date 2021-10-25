import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import {Link, useParams} from 'react-router-dom';
import {ROUTES} from "../constants/routes";
import data from '../data/phones.json';

const Phone = () => {
    const {id} = useParams();
    const chosenPhone = data.find(item => item.id === id);
    return (
        <>
            <div className="container">
                <h1>Phone details</h1>
                <Card key={chosenPhone.id}>
                    <CardBody>
                        <CardTitle tag="h5">{chosenPhone.name.last + ' '+ chosenPhone.name.first }</CardTitle>
                        <label>Phone: </label>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">{chosenPhone.phone}</CardSubtitle>
                        <label>Company: </label>
                        <CardText>{chosenPhone.company}</CardText>
                        <label>Email: </label>
                        <CardText>{chosenPhone.email}</CardText>
                        <label>Address: </label>
                        <CardText>{chosenPhone.address}</CardText>
                        <label>Registered: </label>
                        <CardText>{chosenPhone.registered}</CardText>
                        <Link to={ROUTES.dynamic.edit(id)}>
                            <Button>edit</Button>
                        </Link>
                    </CardBody>
                </Card>
            </div>
        </>
    );
};
export default Phone;