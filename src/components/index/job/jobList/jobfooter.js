import React,{Component} from 'react'
import './jobfooter.css'



class JobFooter extends Component{
	constructor(){
		super();
		this.state={
			pageNo:1
		}
		this.hundlClick = this.hundlClick.bind(this)
	}
	hundlClick(){
		this.setState({
			pageNo:this.state.pageNo+1
		})
	}

	render(){
		return(
			<div id='job-footer'>
				<div className='list-more' onClick={this.hundlClick}>加载更多</div>
				<p className='list-chop'>©2015 lagou.com, all right reserved </p>
				<div className='list-foot'>
					<span className='mob'>移动版</span>
					<span >&nbsp;电脑版</span>
					<span>&nbsp;回顶部</span>
				</div>

			</div>
			)
	}
}

export default JobFooter