import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'

import NewCounter from './container/Counter'
import reducer from './reducer/reducers'
import {helloSaga} from './saga/sagas'

import createSagaMiddleware from 'redux-saga'


const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(helloSaga);

ReactDOM.render(
    <Provider store={store}>
        <NewCounter />
    </Provider>,
    document.getElementById('root')
)


// const action = type => store.dispatch({type})
//
// function render() {
//     ReactDOM.render(
//         <Counter
//             value={store.getState()}
//             onIncrement={() => action('INCREMENT')}
//             onDecrement={() => action('DECREMENT')}
//             onIncrementAsync={() => action('INCREMENT_ASYNC')}/>,
//         document.getElementById('root')
//     )
// }
//
// render();
// store.subscribe(render)
