import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

export default function phone({item,chosePhone}) {
    return (
        <div>
            <Card key={item.id}>
                <CardBody>
                    <CardTitle tag="h5">{item.name.last + ' '+ item.name.first }</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">{item.phone}</CardSubtitle>
                    <CardText>{item.company}</CardText>
                    <Button onClick={() => chosePhone(item.id)} >edit</Button>
                </CardBody>
            </Card>
        </div>
    );
}