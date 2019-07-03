import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Icon } from 'semantic-ui-react';

const AnyReactComponent = () => <Icon name='marker' size='big' color='red' />;

class SimpleMap extends Component {

  render() {
      const { latlng } = this.props;
      console.log("latlng: ", latlng);
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '300px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: `${process.env.REACT_APP_GOOGLE_PLACE_API_KEY}`}}
          defaultCenter={{lat: 69.00, lng: 42.00}}
          defaultZoom={3}
          center={latlng}
        >
          <AnyReactComponent
            lat={latlng.lat}
            lng={latlng.lng}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;