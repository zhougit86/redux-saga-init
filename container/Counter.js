/*eslint-disable no-unused-vars */
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {Increase, Decrease} from '../actions/actions'

const Counter = ({value, onIncrement, onDecrement, onIncrementAsync}) =>
    (<div>
        <button onClick={onIncrement}>
            Increment
        </button>
        {' '}
        <button onClick={onDecrement}>
            Decrement
        </button>
        {' '}
        <button onClick={onIncrementAsync}>
            Increment after 1 second
        </button>
        <hr />
        <div>
            Clicked: {value} times
        </div>
    </div>);


Counter.propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    value: state
});

const mapDispatchToProps = {
    onIncrement: Increase,
    onDecrement: Decrease
}

const NewCounter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)


export default NewCounter
