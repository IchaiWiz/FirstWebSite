// Counter.js
import React, { useReducer, useEffect } from 'react';
import { ACTION_TYPES, increment, decrement, reset, changeColor, multiplyRandom, lessThanMin } from './ACTION.js';
import './Calculus.css';

function reducer(state, action) {
    switch (action.type) {
        case ACTION_TYPES.INCREMENT:
            return { ...state, counter: state.counter + 1 };
        case ACTION_TYPES.DECREMENT:
            if (state.counter <= -11) {
                return { ...state, counter: 613 };
            }
            return { ...state, counter: state.counter - 1 };
        case ACTION_TYPES.RESET:
            return { ...state, counter: 0 };
        case ACTION_TYPES.CHANGE_COLOR:
            return { ...state, color: action.payload };
        case ACTION_TYPES.MULTIPLY_RANDOM:
            return { ...state, counter: state.counter * action.payload };
        case ACTION_TYPES.LESS_THAN_MIN:
            return { ...state, counter: 613 };
        default:
            return state;
    }
}

const initialState = {
    counter: 0,
    color: '#eeeeee',
}

function Calculus() {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        if (state.counter < -11) {
            dispatch(lessThanMin());
        }
    }, [state.counter]);

    const handleColorChange = () => {
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        dispatch(changeColor(randomColor));
    };

    return (
        <div className="counter-bg">
            <div className="counter-box" style={{ color: state.color }}>
                <h1 className="counter-title">Voici mon compteur :</h1>
                <button className="counter-button" onClick={() => dispatch(increment())}>+</button>
                <h1 className="counter-value">{state.counter}</h1>
                <button className="counter-button" onClick={() => dispatch(decrement())}>-</button>
                <button className="counter-button" onClick={() => dispatch(reset())}>Reset</button>
                <button className="counter-button" onClick={handleColorChange}>Changer la couleur</button>
                <button className="counter-button" onClick={() => dispatch(multiplyRandom())}>Multiplier la somme aléatoirement</button>
            </div>
        </div>
    );
}

export default Calculus;