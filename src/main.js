import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory ,browserHistory,IndexRoute} from 'react-router';
import Index from './components/index/index';
import Login from './components/login/login';
import Register from './components/register/register';
import Job from './components/index/job/job';
import JobList from './components/index/job/jobList/jobList';
import Search from './components/index/search/search';
import Mine from './components/index/mine/mine';
import Person from './components/login/person'
//import JobXq from './components/index/job/jobxq'
//import Router from './routers/router'

ReactDOM.render((
  <Router history={ hashHistory}>
    <Route path="/" component={Index}>
      <Route component={Job}>
        <IndexRoute component={JobList}/>
      </Route>
      <Route path="/index/search" component={Search}/>
      <Route path="/index/mine" component={Mine}/>
    </Route>
    <Route path="/login" component={Login}/>
    <Route path='/person' component={Person} />
    <Route path="/register" component={Register}/>
    
   </Router>
  ),document.getElementById('lagou')
)
