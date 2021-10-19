import { CardTitle,   } from 'reactstrap';
import data from '../data/phones.json';
import {ROUTES} from "../constants/routes";
import {Link} from "react-router-dom";
import AlphabetList from "react-alphabet-list";



export default function Phones() {
    const sortData =data.sort(function(a, b){
        if(a.name.last < b.name.last) { return -1; }
        if(a.name.last > b.name.last) { return 1; }
        return 0;
    });

    const newdata = data.map((sortData) => {
        return (
            <div key={sortData.id}>
                    <Link to={ROUTES.dynamic.details(sortData.id)}>
                        <CardTitle tag="h5">{sortData.name.last + ' '+ sortData.name.first }</CardTitle>
                    </Link>
            </div>
        )
    });
    return (
        <div className="container">
            <h1>Phone Book</h1>
            <AlphabetList
                className="alpha-list"
                data={newdata}
                generateFn={
                    (item, index) => {
                    return (
                        <div key={item}>
                            {item}
                        </div>
                    );
                }}
            />
        </div>
    );
}