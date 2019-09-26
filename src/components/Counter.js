import React, { useState } from 'react';

export default function Counter(props) {
    const [count, setCount] = useState(0);
    const operation = (type) => {
        switch(type) {
            case '+': { 
                setCount(count + 1);
                break;
            }
            case '-': { 
                setCount(count - 1);
                break;
            }
            default: {
                setCount(0);
                break;
            }
        }
    }
    return (
        <>
            <h1>Count: {count} </h1>
            <div>
                <button className="pure-button mr-1 active" onClick={_ => operation('#')}>Reset</button> 
                <button className="pure-button pure-button-primary mr-1" onClick={_ => operation('+')}>+</button> 
                <button className="button-error pure-button mr-1" onClick={_ => operation('-')}>-</button>
            </div>
        </>
    )
}