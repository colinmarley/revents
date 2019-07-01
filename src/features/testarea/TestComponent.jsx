import React, { Component } from 'react'
import { connect } from 'react-redux';

const mapState = (state, ownProps) => ({
    data: state.data
});

const mapDispatch = dispatch => ({

});

class TestComponent extends Component {
    render() {
        return (
            <div>
                <h1>Test Component</h1>
                <h3>The Answer is { this.props.data } </h3>
            </div>
        )
    }
}

export default connect(
    mapState,
    mapDispatch
)(TestComponent);
