import React, {Component} from 'react';

import FlatList from './flat-list.jsx';
import SimpleMap from './map.jsx';
import flats from '../../data/flats.js'


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedFlat: flats[0],
      flats
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

        </div>
      </div>
    );
  }
}

export default App;
