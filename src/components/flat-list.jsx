import React, { Component } from 'react';

import Flat from './flat'

class FlatList extends Component {
  renderflats = () => {
    return this.props.flats.map((flat, index) =>
      <Flat
        flat={flat}
        index={index}
        key={flat.lat}
        selected={flat.name === this.props.selectedFlat.name}
        selectFlat={this.props.selectFlat}
      />
    );
  }
  render(){
    return(<div className="flat-list">{this.renderflats()}</div>);
  }
}

export default FlatList;
