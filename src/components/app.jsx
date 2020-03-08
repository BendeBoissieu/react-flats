import React, {Component} from 'react';

import FlatList from './flat-list.jsx';
import SimpleMap from './map.jsx';
import flats from '../../data/flats.js'


class App extends Component {
  render(props){
    return (
      <div>
        <FlatList flats = {flats}/>
        <div className="map-container">
          <SimpleMap flats = {flats}/>
        </div>
      </div>
    );
  }
}

export default App;
