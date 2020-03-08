import React, { Component } from 'react';

import flats from './flats.js'

class Flat extends Component {
  render(){
    const style = {
      backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('${this.props.imageUrl}')`
    };
    return(
      <div className="card" style={style}>
        <div className="card-category">{this.props.price} {this.props.priceCurrency}</div>
        <div className="card-description">
          <h2>{this.props.name}</h2>
        </div>
        <a className="card-link" href="#"></a>
      </div>
    );
  }
}
export default Flat;
