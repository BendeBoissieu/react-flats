import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import Flat from './flat'

const Marker = ({ text }) => {
  return(
     <div>{text}</div>
  );
};


class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 48.88,
      lng: 2.341
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'test' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker
            lat={this.props.selectedFlat.lat}
            lng={this.props.selectedFlat.lng}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
