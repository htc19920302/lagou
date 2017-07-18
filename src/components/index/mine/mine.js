import React from 'react';
import ReactDOM from 'react-dom';
import MyLogin from "./myLogin"
import MyJob from "./myjob"
import {Link} from 'react-router'
		
class Mine extends React.Component{
	constructor(){
		super();
		this.state={
			username:''
		}
		this.quitCilck=this.quitCilck.bind(this)

	}

	
	componentDidMount(){
		var user =localStorage.getItem("username"),
				resume = document.querySelector("#haslogin-center"),
				quit = document.querySelector("#quit"),
				login = document.querySelector("#logininfo");
		this.setState({
			username:user
		})

		console.log(user)
		if(!user){
			login.style.display="block"

		}else{
			quit.style.display ="block"
			resume.style.display ="block"
		}

	}
	quitCilck(){
		var resume = document.querySelector("#haslogin-center"),
				quit = document.querySelector("#quit"),
				login = document.querySelector("#logininfo");
		console.log(resume)
		login.style.display="block"
		quit.style.display ="none"
		resume.style.display ="none"
	}
  	render () {
    return (
      <div id="content">
      		<div id="haslogin-center" style={{display:"none"}}>
	                 <span className='resume'>简历&gt;</span>
	                  <div className="headcon">
	                 	 <img className="headpic" src="//www.lgstatic.com/images/myresume/default_headpic.png"/>
	                  </div>
	                  <div id="name">{this.state.username}</div>
	        </div>
      		<div id="logininfo" style={{display:"none"}}>
					<Link to="/Login" className='loginbtn'>登录/注册</Link>
			</div>
      		<MyJob/>
      		<div id="quit" style={{display:"none"}} onClick={this.quitCilck}>退出登录</div>
      </div>
    )
  }
}
module.exports = Mine;
