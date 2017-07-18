import React from 'react';
import ReactDOM from 'react-dom';
import job from './job.css';

class Job extends React.Component{
  render () {
    return (
      <div id="index_job">
        {this.props.children}
      </div>
    )
  }
}
module.exports = Job;
