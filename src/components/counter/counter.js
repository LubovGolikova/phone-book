import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux";
import {decrement, increment} from '../../slices/counterSlice';
import {Button} from 'reactstrap';

const Counter = () => {
    const countState = useSelector((state) => state.counter.value);
    const [count, setCount] = useState(0);
    const dispatch = useDispatch();

    useEffect(()=> {
        document.title =`${count} `
    });

    return (
        <>
            <div>
                <Button onClick={()=>dispatch(increment())}>
                    Increment
                </Button>
                <span>{countState}</span>
                <Button onClick={()=>dispatch(decrement())}>Decrement</Button>

                <Button onClick={()=> setCount(count+1)}>Count</Button>
            </div>
        </>
    )
};
export default Counter;