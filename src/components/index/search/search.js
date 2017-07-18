import React from 'react';
import ReactDOM from 'react-dom';
import search from './search.css'
import img from './bg.png'
import Detail from '../job/jobList/jobDetail'
import List from '../job/jobList/jobtemplet'
class Search extends React.Component{
		constructor(){
			super();
			this.SearchCilck =this.SearchCilck.bind(this)

		}

	SearchCilck(){
		var somore = document.querySelector("#Somore"),
			aa =document.querySelector("#aa");
		
			somore.style.display="block"
		console.log(1)
	}

  render () {
    return (
      <div id="header">
      		<div className="tilte">全国</div>
	      
	        <div className="b">
	      		<input type="text" className="inputs" placeholder="搜索职位或公司"/>
	      		<span className="rright" onClick={this.SearchCilck}>
	      			<img src={img} / >
	      		</span>
	      </div>
		<div id="Somore" style={{display:"none"}}>
			<List  />	
				
		</div>			
      </div>

    )
  }
}
module.exports = Search;
