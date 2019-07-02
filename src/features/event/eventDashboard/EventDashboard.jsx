import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import EventList from '../EventList/EventList';
import { createEvent, deleteEvent, updateEvent } from '../eventActions';

const mapState = (state, ownProps) => ({
	events: state.events,
});

const mapDispatch = dispatch => ({
	createEvent: event => {
		dispatch(createEvent(event));
	},
	updateEvent: event => {
		dispatch(updateEvent(event));
	},
	deleteEvent: eventId => {
		dispatch(deleteEvent(eventId));
	},
});

class EventDashboard extends Component {
	handleDeleteEvent = id => {
		this.props.deleteEvent(id);
	};

	render() {
		const { events } = this.props;
		return (
			<Grid>
				<Grid.Column width={10}>
					<EventList events={events} deleteEvent={this.handleDeleteEvent} />
				</Grid.Column>
				<Grid.Column width={6}>
					<h2>Activity Feed</h2>
				</Grid.Column>
			</Grid>
		);
	}
}

export default connect(
	mapState,
	mapDispatch
)(EventDashboard);
