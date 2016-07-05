import React from 'react';
export default class BaseComponent extends React.Component {
  constructor() {
    super();
    this.state = {};
    // this.toStyle = this.toStyle.bind(this);
  }

  log(msg){
    if(this.props.log){
      this.props.log.show(msg);
    }
  }

  toStyle(styles){
    var obj = {};
    if(styles && styles.length>0){
      var data = styles.split(';');
      
      data.map(function(item){
        var q = item.split(':');
        if(q.length==2){
          obj[q[0]] = q[1];
        } 
      });
    }

    return obj;
  }

}