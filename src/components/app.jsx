import React, {Component} from 'react';

import FlatList from './flat-list.jsx';
import SimpleMap from './map.jsx';

class App extends Component {
  render(props){
    return (
      <div>
        <div className="flat-list">
          <FlatList />
        </div>
        <div className="map-container">
          <SimpleMap />
        </div>
      </div>
    );
  }
}

export default App;
