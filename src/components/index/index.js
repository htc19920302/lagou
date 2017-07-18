import React from 'react';
import ReactDOM from 'react-dom';
import Footer from '../public/footer';
import Header from '../public/header';
import DownLoad from '../public/downLoad';
import Person from '../login/person'

class Index extends React.Component{
  render () {
    return (
      <div>
        <Header />
        {this.props.children}
        <DownLoad />
        <Footer />
      </div>
    )
  }
}
module.exports = Index;
