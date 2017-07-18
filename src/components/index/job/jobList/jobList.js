import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import jobList from './jobList.css';
import List from './jobtemplet'
import JobFooter from './jobfooter'
class JobList extends React.Component{
  render () {
    return (
      <div id="job_jobList">
          <p className="jobList-action">
            <span>10秒钟定制职位</span>
            <span><Link to="index/mine">去登陆</Link></span>
          </p>
          <List />
          <JobFooter/>
      </div>
    )
  }
}
module.exports = JobList;
