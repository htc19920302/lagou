import React from 'react';
import ReactDOM from 'react-dom';
import footer from './footer.css';
import {Link,IndexLink} from 'react-router';

class Footer extends React.Component {
  render (){
    return (
      <ul id="footer">
        <li><IndexLink to="/" activeClassName="active">职位</IndexLink></li>
        <li><Link to="/index/search" activeClassName="active">搜索</Link></li>
        <li><Link to="/index/mine" activeClassName="active">我的</Link></li>
      </ul>
    )
  }
}
module.exports = Footer;
