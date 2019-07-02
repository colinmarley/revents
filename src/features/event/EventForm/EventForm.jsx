import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { Segment, Form, Button, Grid, Header } from 'semantic-ui-react';
import { createEvent, updateEvent } from '../eventActions';
import cuid from 'cuid';
import TextInput from '../../../app/common/form/TextInput';
import TextArea from '../../../app/common/form/TextArea';

const mapState = (state, ownProps) => {
	const eventId = ownProps.match.params.id;

	let event = {
		title: '',
		date: '',
		city: '',
		venue: '',
		hostedBy: '',
	};

	if (eventId && state.events.length > 0) {
		event = state.events.filter(event => event.id === eventId)[0];
	}

	return {
		event,
	};
};

const mapDispatch = dispatch => ({
	createEvent: event => {
		dispatch(createEvent(event));
	},
	updateEvent: event => {
		dispatch(updateEvent(event));
	},
});

class EventForm extends Component {
	handleFormSubmit = e => {
		e.preventDefault();
		if (this.state.id) {
			this.props.updateEvent(this.state);
			this.props.history.push(`/events/${this.state.id}`);
		} else {
			const newEvent = {
				...this.state,
				id: cuid(),
				hostPhotoURL: '/assets/user.png',
			};
			this.props.createEvent(newEvent);
			this.props.history.push(`/events`);
		}
	};

	render() {
		return (
			<Grid>
				<Grid.Column width={10}>
					<Segment>
						<Header sub color='teal' content='Event Details' />
						<Form onSubmit={this.handleFormSubmit} autoComplete='off'>
							<Field
								name='title'
								component={TextInput}
								placeholder='Give your event a name'
							/>
							<Field
								name='category'
								component={TextInput}
								placeholder='What is your event about?'
							/>
							<Field
								name='description'
                                component={TextArea}
                                rows={3}
								placeholder='Tell us about your event'
							/>
							<Header sub color='teal' content='Event Location Details' />
                      <Field
								name='city'
								component={TextInput}
								placeholder='Event city'
							/>
							<Field
								name='venue'
								component={TextInput}
								placeholder='Event venue'
							/>
							<Field
								name='date'
								component={TextInput}
								placeholder='Event date'
							/>

							<Button positive type='submit'>
								Submit
							</Button>
							<Button onClick={this.props.history.goBack} type='button'>
								Cancel
							</Button>
						</Form>
					</Segment>
				</Grid.Column>
			</Grid>
		);
	}
}

export default connect(
	mapState,
	mapDispatch
)(reduxForm({ form: 'eventForm' })(EventForm));
