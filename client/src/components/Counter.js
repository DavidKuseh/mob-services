import React from 'react';
import { connect } from 'react-redux';

import * as actionCreators from '../redux-store/actions/actionCreators';

export function Counter(props){
    const { decrement, increment, count } = props;
    return (
        <div>
            The count is {count}
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
        </div>
    );
};

export default connect(
    state => state,
    actionCreators,
)(Counter);