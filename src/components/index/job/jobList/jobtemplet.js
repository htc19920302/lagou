import React,{Component} from 'react';
import Detail from './jobDetail';
import 'whatwg-fetch';

// import Shenti from './Shenti';

let positionName = [],
                city = [],
                salary = [],
                createTime = [],
                companyLogo = [],
                companyName = [];

class List extends Component{
    constructor(){
        super();

        this.state={
            companyLogo:[],
            companyName:[],
            positionName:[],
            city:[],
            salary:[],
            createTime:[],
        }
        
    }


    
        componentWillReceiveProps(newprops){
        if (newprops.pageNo!=this.props.pageNo) {
            let that = this;
        fetch("https://m.lagou.com/listmore.json?pageNo="+this.props.pageNo+"&pageSize=15",{
            method:'GET',
        }).then(function(response) {
            return response.text()
        }).then(function(body) {
            let data = JSON.parse(body).content.data.page.result
            
            data.map(function (elm) {
                positionName.push(elm.positionName);
                salary.push(elm.salary);
                city.push(elm.city);
                createTime.push(elm.createTime);
                companyLogo.push("//www.lgstatic.com/"+elm.companyLogo);
                companyName.push(elm.companyName);
            })


            that.setState({
                positionName:positionName,
                city:city,
                salary:salary,
                createTime:createTime,
                companyLogo:companyLogo,
                companyName:companyName,
            })
        })
        }
            
    }


    componentDidMount(){
        let that = this;
        fetch("https://m.lagou.com/listmore.json?pageNo=1&pageSize=15",{
            method:'GET',
        }).then(function(response) {
            return response.text()
        }).then(function(body) {
            let data = JSON.parse(body).content.data.page.result
            
            
            data.map(function (elm) {
                positionName.push(elm.positionName);
                salary.push(elm.salary);
                city.push(elm.city);
                createTime.push(elm.createTime);
                companyLogo.push("//www.lgstatic.com/"+elm.companyLogo);
                companyName.push(elm.companyName);
            })
           

            that.setState({
                positionName:positionName,
                city:city,
                salary:salary,
                createTime:createTime,
                companyLogo:companyLogo,
                companyName:companyName,
            })
        })

    }
    render(){
        let that = this;
        let lists = this.state.companyName.map(function(elm,idx){
            return (
                <Detail companyLogo={that.state.companyLogo[idx]} companyName={that.state.companyName[idx]}
                      positionName={that.state.positionName[idx]} city={that.state.city[idx]}
                      salary={that.state.salary[idx]} createTime={that.state.createTime[idx]}/>
            )
        })
        return(
            <ul className="list">
                {lists}
            </ul>
        )
    }
}




export default List