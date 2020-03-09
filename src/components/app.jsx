import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import FlatList from './flat-list.jsx';
import Marker from './marker.jsx';
import flats from '../../data/flats.js'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedFlat: flats[0],
      flats
    };
  }

  center() {
    return {
      lat: this.state.selectedFlat.lat,
      lng: this.state.selectedFlat.lng
    };
  }

  selectFlat = (index) => {
    this.setState({selectedFlat: flats[index]});
  }



  render(props){
    return (
      <div>
        <FlatList flats = {this.state.flats} selectedFlat = {this.state.selectedFlat} selectFlat = {this.selectFlat}/>
        <div className="map-container">
          <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_KEY }}
            defaultCenter={this.center()}
            defaultZoom={12}
          >
            <Marker
              lat={this.state.selectedFlat.lat}
              lng={this.state.selectedFlat.lng}
            />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
