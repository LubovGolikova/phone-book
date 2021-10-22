// import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import {Link, useParams} from 'react-router-dom';
import {ROUTES} from "../constants/routes";
import {Button} from "reactstrap";
import Counter from '../../features/counter/counter';
// import data from '../data/phones.json';

const Phone = ({chosenPhone}) => {
    const {id} = useParams();
    console.log(id);
    console.log(chosenPhone);
    return (
        <>
            <div className="container">
                <h1>Phone details</h1>
                {/*<Card key={chosenPhone.id}>*/}
                {/*    <CardBody>*/}
                {/*        <CardTitle tag="h5">{chosenPhone.name.last + ' '+ chosenPhone.name.first }</CardTitle>*/}
                {/*        <CardSubtitle tag="h6" className="mb-2 text-muted">{chosenPhone.phone}</CardSubtitle>*/}
                {/*        <CardText>{chosenPhone.company}</CardText>*/}
                {/*        <Button >edit</Button>*/}
                {/*    </CardBody>*/}
                {/*</Card>*/}
                <Link to={ROUTES.dynamic.edit(id)}>
                    <Button>edit</Button>
                </Link>
                <Counter></Counter>
            </div>
        </>
    );
};
export default Phone;