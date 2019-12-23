import * as types from '../actions/actionTypes';

export function increment() {
    return { type: types.INCREMENT }
}

export function decrement() {
    return { type: types.DECREMENT }
}