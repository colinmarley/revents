import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter } from './testActions';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { Button } from 'semantic-ui-react';
import TestPlaceInput from './TestPlaceInput';
import SimpleMap from './SimpleMap';
import { openModal } from '../modals/modalActions';

const mapState = (state, ownProps) => ({
	data: state.test.data,
});

const mapDispatch = dispatch => ({
	incrementCounter: () => {
		dispatch(incrementCounter());
	},
	decrementCounter: () => {
		dispatch(decrementCounter());
	},
	openModal: (modalType, modalProps) => {
		dispatch(openModal(modalType, modalProps));
	},
});

class TestComponent extends Component {
	state = {
		latlng: {
			lat: 69.0,
			lng: 69.0,
		},
	};

	handleSelect = address => {
		geocodeByAddress(address)
			.then(results => getLatLng(results[0]))
			.then(latlng =>
				this.setState({
					latlng: latlng,
				})
			);
	};

	render() {
		const { latlng } = this.state;
		const { data, incrementCounter, decrementCounter, openModal } = this.props;
		return (
			<div>
				<h1>Test Component</h1>
				<h3>The Answer is {data} </h3>
				<Button onClick={incrementCounter} positive content='Increment' />
				<Button onClick={decrementCounter} negative content='Decrement' />
				<Button
					onClick={() => openModal('TestModal', { data: 42 })}
					color='teal'
					content='Open Modal'
				/>
				<br />
				<br />
				<TestPlaceInput handleSelect={this.handleSelect} />
				<br />
				<SimpleMap latlng={latlng} />
			</div>
		);
	}
}

export default connect(
	mapState,
	mapDispatch
)(TestComponent);
