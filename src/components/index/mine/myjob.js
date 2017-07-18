import React,{Component} from 'react'
import ReactDOM from 'react-dom';
import './myjob.css'


class MyJob extends Component{
	render(){
		return(
			< div id="btns">
				<p className="btn-deliver">投递</p>
				<p className="btn-invite">面试</p>
				<p className="btn-Interview">邀约</p>
				<p className="btn-collect">收藏</p>
			</div>	

			)
	}
}
module.exports =  MyJob