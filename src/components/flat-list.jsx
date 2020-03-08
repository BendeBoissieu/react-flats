import React, { Component } from 'react';

import Flat from './flat.jsx'

class FlatList extends Component {
  renderflats = () => {
    return this.props.flats.map(flat => <Flat flat={flat} key={flat.lat} />)
  }
  render(){
    return(<div className="flat-list">{this.renderflats()}</div>);
  }
}

export default FlatList;
