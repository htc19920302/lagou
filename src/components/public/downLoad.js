import React from 'react';
import ReactDOM from 'react-dom';
import downLoad from './downLoad.css';

class DownLoad extends React.Component{
  constructor () {
    super();
  }
  handleClick (event) {
    const e = event || window.event;
    const downLoad = this.refs.downLoad;
    downLoad.style.display ="none"
    e.stopPropagation();
    e.preventDefault();
  }
  render () {
    return (
      <div id="downLoad" ref="downLoad">
        <img src="http://www.lgstatic.com/m/images/asset/custom/list/img/download_logo_new.png"/>
        <img src="http://www.lgstatic.com/m/images/asset/custom/list/img/download_txt_new.png"/>
        <img src="http:////www.lgstatic.com/m/images/asset/custom/list/img/download_btn_new.png"/>
        <img src="http:////www.lgstatic.com/m/images/asset/custom/list/img/download_mascot.png" className="downLoadPic"/>
        <div className="close-btn" onClick={this.handleClick.bind(this)}>
          <img src="http:////www.lgstatic.com/m/images/asset/custom/list/img/download_btn_close.png" />
        </div>
      </div>
    )
  }
}
module.exports = DownLoad;
