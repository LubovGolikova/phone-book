import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import {decrement, increment} from '../../store/slices/counterSlice';
import {Button} from 'reactstrap';

const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    return (
        <>
            <div>
                <Button onClick={()=>dispatch(increment())}>
                    Increment
                </Button>
                <span>{count}</span>
                <Button onClick={()=>dispatch(decrement())}>Decrement</Button>
            </div>
        </>
    )
};
export default Counter;