import React, { Component, Fragment } from 'react'
import EventListItem from './EventListItem';

class EventList extends Component {

    render() {
        const { event, selectEvent } = this.props
        return (
            <Fragment>
                {this.props.events.map(event => (
                    <EventListItem key={event.id} event={event} selectEvent={ selectEvent } />
                ))}
            </Fragment>
        )
    }
}

export default EventList;