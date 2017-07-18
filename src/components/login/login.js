import React from 'react';
import ReactDOM from 'react-dom';
import login from './login.css'
import img from './ps.png'
import {browserHistory,hashHistory} from 'react-router';

class Login extends React.Component{
  
  	constructor(){
  		super();
  		this.state={
  			pos:0,
  			type:"password",
        username:'',
        password:''
  		}
  		this.hundleClick = this.hundleClick.bind(this)
      this.setStorage = this.setStorage.bind(this)
  	}
  	hundleClick(){
  		
  			if(this.state.type === "password"){
  				this.setState({ 
  					type:"text",
  					pos:"-0.16rem"
  				})
  			}else{
  				this.setState({
  					type:"password",

  					pos:0
  				})
  			}
  		
  	}


    setStorage(){
        
        var user = document.getElementsByClassName("user")[0].value,
            pswd = document.getElementsByClassName("pswd")[0].value;
      
         /*setTimeout({function(){
            window.location ='/person'
         }},100)*/
         if(!user){
            alert("请输入用户名")
         }else if(!pswd){
            alert("请输入密码")
         }else{
          var url = "/person"
           hashHistory.push(url)
         }
           localStorage.setItem("username",user)
    }
	render () {



    return (
    <div id="boss">
	      <div id="login">
         
	      	<div className="new-register">
	      		<input type="text" placeholder="已验证手机/邮箱"className="user"/ >
	      		<input type={this.state.type} placeholder="密码" className="pswd"/>
	      		<i id="eyes" onClick={this.hundleClick}><img src={img} style={{top:this.state.pos}}/></i>
	      	</div>
	      	<div className="register">
	      		<input type="button" value="登录" className='_login' onClick={this.setStorage}/>
	      		<p className="register-text">还没账号？</p>
	      		<input type="button" value="注册" className="_register"/>
	      	</div>
          
	      </div>
	 </div>
    )
  }
}
module.exports = Login;
