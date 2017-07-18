import React,{Component} from 'react'
import './person.css'
import MyJob from '../index/mine/myjob'
import Header from '../public/header'
import Footer from '../public/footer'





class Person extends Component{

	constructor(){
		super();
		this.state={
			username:''
		}
	}
	componentDidMount(){
		var user = localStorage.getItem("username")
		console.log(user)
		this.setState({
			username:user
		})
	}
	render(){
		return(
			<div>
				<Header/>
				<div id="haslogin-center">
	                 <span className='resume'>简历&gt;</span>
	                  <div className="headcon">
	                 	 <img className="headpic" src="//www.lgstatic.com/images/myresume/default_headpic.png"/>
	                  </div>
	                  <div id="name">{this.state.username}</div>
	             </div>
	             <MyJob/>
	             <div id="quit">退出登录</div>
	             <Footer />
			</div>

			)
	}
}

export default Person