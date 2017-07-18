import React,{Component} from 'react';
import jobDetail from './jobDetail.css'
import Send from '../../ajax'
 
class Detail extends Component{


  // componentWillMount(){
  //  Send("../../../../static/mock/Lagou.json",function(data){
  //          var data =JSON.parse(data).content
  //             data.map(function(ele,idx){
  //                 city.push(ele.city)
  //                 time.push(ele.createTime)
  //                 salary.push(ele.salary)
  //                 positionName.push(ele.positionName)

  //             })
  //       })
  // }




    render(){
		  
         

              
        return( 

              <article className="list-item">
                  <img src={this.props.companyLogo} className="item-img"/>
                  <div className="item-desc">
                    <h2 className="item-title">{this.props.companyName}</h2>
                    <p className="item-info">
                        <span className="item-pos">
                           {this.props.positionName}{this.props.city}
                        </span>
                        <span className="item-salary">{this.props.salary}</span>
                    </p>
                    <p className="item-time">{this.props.createTime}</p>
                  </div>
              </article>
			)
  
  }

}

export default Detail