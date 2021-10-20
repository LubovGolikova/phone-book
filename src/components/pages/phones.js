import {CardTitle,} from 'reactstrap';
import data from '../data/phones.json';
import {ROUTES} from "../constants/routes";
import {Link} from "react-router-dom";
// import AlphabetList from "react-alphabet-list";

//TODO alphabets sort
// const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const sortData = data.sort(function (a, b) {
    if (a.name.last < b.name.last) {
        return -1;
    }
    if (a.name.last > b.name.last) {
        return 1;
    }
    return 0;
});
const Phones = () => {
    const newdata = data.map((sortData) => {
        return (
            <div key={sortData.id}>
                <Link to={ROUTES.dynamic.details(sortData.id)}>
                    <CardTitle tag="h5">{sortData.name.last + ' ' + sortData.name.first}</CardTitle>
                </Link>
            </div>
        )
    });

    let result = sortData.map(({name}) => {
        return {name}
    });
    console.log(result);

    return (
        <div className="container">
            <h1>Phone Book</h1>
            {
                newdata
            }
            {/*<AlphabetList*/}
            {/*    key={result}*/}
            {/*    className="alpha-list"*/}
            {/*    data={result}*/}
            {/*    generateFn={*/}
            {/*        (item, index) => {*/}
            {/*        return (*/}
            {/*                <div key={item.id}>{item}</div>*/}
            {/*        );*/}
            {/*    }}*/}
            {/*/>*/}
        </div>
    );
};

export default Phones;