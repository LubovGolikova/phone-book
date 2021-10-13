import data from '../data/phones.json';
import { Card, CardBody, CardTitle,  Button } from 'reactstrap';
import {useState} from "react";

export default function Phones() {
    let [chosenPhone, setChosenPhone] = useState(null);
    const chosePhone = (id) => setChosenPhone(data.find(value => value.id === id));
    const newdata = data.map((data) => {
        return (
            <Card key={data.id}>
                <CardBody>
                    <CardTitle tag="h5">{data.name.last + ' '+ data.name.first }</CardTitle>
                    <Button chosePhone = {chosePhone} >details</Button>
                </CardBody>
            </Card>
        )
    })
    return (
        <div className="container">
            <h1>Phone Book</h1>
            <div>{ chosenPhone && <div>{chosenPhone.address}</div>}</div>
            {
                newdata
            }
        </div>
    );
}