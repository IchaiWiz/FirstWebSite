// counterActions.js
export const ACTION_TYPES = {
    INCREMENT: "increment",
    DECREMENT: "decrement",
    RESET: "reset",
    CHANGE_COLOR: "changeColor",
    MULTIPLY_RANDOM: "multiplyRandom",
    LESS_THAN_MIN: "lessThanMin"
}

export const increment = () => ({
    type: ACTION_TYPES.INCREMENT
});

export const decrement = () => ({
    type: ACTION_TYPES.DECREMENT
});

export const reset = () => ({
    type: ACTION_TYPES.RESET
});

export const changeColor = (color) => ({
    type: ACTION_TYPES.CHANGE_COLOR,
    payload: color
});

export const multiplyRandom = () => ({
    type: ACTION_TYPES.MULTIPLY_RANDOM,
    payload: Math.floor(Math.random() * 10) + 1
});

export const lessThanMin = () => ({
    type: ACTION_TYPES.LESS_THAN_MIN,
});
