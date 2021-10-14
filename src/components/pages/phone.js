import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

export default function phone({chosenPhone}) {
    return (
        <div>
            <Card key={chosenPhone.id}>
                <CardBody>
                    <CardTitle tag="h5">{chosenPhone.name.last + ' '+ chosenPhone.name.first }</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">{chosenPhone.phone}</CardSubtitle>
                    <CardText>{chosenPhone.company}</CardText>
                    <Button >edit</Button>
                </CardBody>
            </Card>
        </div>
    );
}