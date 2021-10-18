import { Card, CardBody, CardTitle,  Button } from 'reactstrap';
import data from '../data/phones.json';
import {ROUTES} from "../constants/routes";
import {Link} from "react-router-dom";


export default function Phones() {
    const newdata = data.map((data) => {
        return (
            <Card key={data.id}>
                <CardBody>
                    <CardTitle tag="h5">{data.name.last + ' '+ data.name.first }</CardTitle>
                    <Link to={ROUTES.dynamic.details(data.id)}>
                        <Button>details</Button>
                    </Link>
                </CardBody>
            </Card>
        )
    })
    return (
        <div className="container">
            <h1>Phone Book</h1>
            {
                newdata
            }
        </div>
    );
}