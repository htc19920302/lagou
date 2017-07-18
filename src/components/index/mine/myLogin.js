import React,{Component} from 'react'
import "./myLogin.css"
import {Link} from 'react-router'


class MyLogin extends Component{
	render(){
		return(
			<div>

			
				<div className="logininfo">
					<Link to="/Login" className='loginbtn'>登录/注册</Link>
				</div>
				
			</div>
			)
	}
}
module.exports = MyLogin;