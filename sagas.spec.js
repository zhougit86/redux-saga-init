/**
 * Created by root on 17-7-1.
 */

import test from 'tape';

import {incrementAsync} from './saga/sagas'
import {delay} from 'redux-saga'
import {put, call} from 'redux-saga/effects'

test('incrementAsync Saga test', (assert) => {
    const gen = incrementAsync()

    assert.deepEqual(
        gen.next().value,
        put({type: 'INCREMENT'}),
        'incrementAsync Saga must dispatch an INCREMENT action'
    );

    assert.deepEqual(
        gen.next().value,
        call(delay, 1000),
        'incrementAsync Saga must call delay(1000)'
    );

    assert.deepEqual(
        gen.next().value,
        put({type: 'DECREMENT'}),
        'incrementAsync Saga must dispatch an DECREMENT action'
    );

    assert.deepEqual(
        gen.next(),
        {done: true, value: undefined},
        'incrementAsync Saga must be done'
    )

    assert.end()
});