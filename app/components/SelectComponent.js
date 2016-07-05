import React from 'react';
import BaseComponent from './BaseComponent';

export default class SelectComponent extends BaseComponent {
  constructor() {
    super();
    this.state = {};
  }
  render() {
  	var opts = this.props.data;
  	var self = this;

  	return (<select className={this.props.class}>{
		opts.map(function(d, i){
		  	return <option className={self.props.optionClass} value={d} key={i}>{d}</option>
		})
  	}</select>);
  }
}