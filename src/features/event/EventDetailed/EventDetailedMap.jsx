import React from 'react';
import { Segment, Icon } from 'semantic-ui-react';
import GoogleMapReact from 'google-map-react';

const Marker = () => <Icon name='marker' size='big' color='red' />;

const EventDetailedMap = ({ lat, lng }) => {
	const zoom = 14;
    
	return (
		<Segment attatched='bottom' style={{padding: '0px'}}>
			<div style={{ height: '300px', width: '100%' }}>
				<GoogleMapReact
					bootstrapURLKeys={{
						key: `${process.env.REACT_APP_GOOGLE_PLACE_API_KEY}`,
					}}
					defaultCenter={{ lat: 42.0, lng: 42.0 }}
					defaultZoom={zoom}
					center={{lat: lat, lng: lng}}
				>
					<Marker />
				</GoogleMapReact>
			</div>
		</Segment>
	);
};

export default EventDetailedMap;
