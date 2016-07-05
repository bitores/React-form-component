import React from 'react';
import ReactDOM from 'react-dom';
import styles from './css/toast.css';
// console.log(styles);

export default class LogComponent extends React.Component {
  constructor=(e)=>{
    super();
    this.state = {};

    this.show = this.show.bind(this);

    this.toastTimer = null;
    this.displayTimer = null;
  }

  selector(s) {
    return document.getElementById(s)
  }

  insertMsg(s, html) {
    this.selector(s).innerHTML = html
  }

  makeText(msg, interval) {
    var scope = this;
      interval = !!interval ? parseInt(interval) : 1000;
      if (this.toastTimer != null) {
        clearTimeout(this.toastTimer);
        clearTimeout(this.displayTimer);
      }
      scope.selector("toastMessage").style.opacity = 1;
      scope.insertMsg("toastMsg", msg);
      scope.selector("toastMessage").style.display = "block";
      scope.toastTimer = setTimeout(function() {
        scope.selector("toastMessage").style.opacity = 0;
        scope.displayTimer = setTimeout(function() {
          scope.selector("toastMessage").style.display = "none"
        }, 1000)
      }, interval);
  }

  show(msg){
    console.log(msg);
    this.makeText(msg);
  }

  componentWillReceiveProps(nextprops){
    console.log(nextprops);
  }

  render() {
    return (
      <div id="toastMessage" 
      className={styles.toastMessage}
      >
        <span id="toastMsg" 
        className={styles.toastMsg}
        ></span>
      </div>
      );
  }
}
