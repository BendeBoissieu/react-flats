import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';

import flats from '../../data/flats.js'

const AnyReactComponent = ({ text }) => {
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

  coordFlats = () => {
    return this.props.flats.map(flat => (<div>test</div>))
  }
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAWPSyyfjb0RX_YMsw5YyZRLmMxpourVUo' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {this.coordFlats()}
          <flats
            lat={48.88184}
            lng={2.343371}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;


// const Hello = (props) => {
//   return (
//     <div className = "container">
//       Hello, Romain
//       {name}
//     </div>
//   );
// };
