import React, { Component } from 'react';

import Flat from './flat.jsx'

class FlatList extends Component {
  renderflats = () => {
    return this.props.flats.map(flat => <Flat id={flat.id} key={flat.id} price={flat.price} name={flat.name} imageUrl={flat.imageUrl} priceCurrency={flat.priceCurrency} />)
  }
  render(){
    return(<div className="flat-list">{this.renderflats()}</div>);
  }
}

export default FlatList;
