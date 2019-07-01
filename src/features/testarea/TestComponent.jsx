import React, { Component } from 'react'
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter } from './testActions';
import { Button } from 'semantic-ui-react';

const mapState = (state, ownProps) => ({
    data: state.test.data
});

const mapDispatch = dispatch => ({
    incrementCounter: () => { dispatch(incrementCounter()); },
    decrementCounter: () => { dispatch(decrementCounter()); }
});

class TestComponent extends Component {

    render() {
        const { data, incrementCounter, decrementCounter } = this.props;
        return (
            <div>
                <h1>Test Component</h1>
                <h3>The Answer is { data } </h3>
                <Button onClick={incrementCounter} positive content='Increment' />
                <Button onClick={decrementCounter} negative content='Decrement' />
            </div>
        )
    }
}

export default connect(
    mapState,
    mapDispatch
)(TestComponent);
