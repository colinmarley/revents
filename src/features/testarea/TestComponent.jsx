import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementAsync, decrementAsync } from './testActions';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { Button } from 'semantic-ui-react';
import TestPlaceInput from './TestPlaceInput';
import SimpleMap from './SimpleMap';
import { openModal } from '../modals/modalActions';

const mapState = (state, ownProps) => ({
	data: state.test.data,
	loading: state.async.loading,
	buttonName: state.async.elementName,
});

const mapDispatch = dispatch => ({
	incrementAsync: (name) => {
		dispatch(incrementAsync(name));
	},
	decrementAsync: (name) => {
		dispatch(decrementAsync(name));
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
		const {
			data,
			incrementAsync,
			decrementAsync,
			openModal,
			loading,
			buttonName,
		} = this.props;
		console.log("buttonName: ", buttonName);
		return (
			<div>
				<h1>Test Component</h1>
				<h3>The Answer is {data} </h3>
				<Button
					name='increment'
					loading={buttonName === 'increment' && loading}
					onClick={e => incrementAsync(e.target.name)}
					positive
					content='Increment'
				/>
				<Button
					name='decrement'
					loading={buttonName === 'decrement' && loading}
					onClick={e => decrementAsync(e.target.name)}
					negative
					content='Decrement'
				/>
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
