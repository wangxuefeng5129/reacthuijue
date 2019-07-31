import React from 'react'
import {TraceList} from "../api/trace";
import OurHeader from "./header"
import './../assets/css/trace.css'
import { HashRouter as Router, Switch, Route } from "react-router-dom";
class trace extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      dataForm:{
        current:1,
        size:10
      },
      data:[]
    }
  }
  componentWillMount() {
    TraceList(this.state.dataForm).then((response)=>{
      this.setState({data:response.data.data.list})
      console.log(this.state.data)
    })
  }
  gotos(){
    this.props.history.push('/trace/traceItem')
  }
  render() {
    return(
      <div className="trace">
        <OurHeader history ={this.props.history}/>
        <ul>
          {
            this.state.data.map((item,index) => {
              return <li key={index} className="menu">
                <div className="head">
                  <p className="traceName">地埋柜名称</p>
                  <p className="time">{item.uploadTime}</p>
                </div>
                <div className="traceItemName">{item.traceName}</div>
                <div className="bottom">
                  <div className="imei">
                    <p>编号</p>
                    <p>{item.imei}</p>
                  </div>
                  <div className="see">
                    <p onClick={this.gotos.bind(this)}>查看</p>
                  </div>
                </div>
              </li>
            })
          }
        </ul>
          {
            this.props.routes.map((item,index)=>{
              if(item.exact){
                return <Route key={index} exact path={item.path} component={item.component}/>
              }else {
                return <Route key={index} path={item.path} component={item.component}/>
              }
            })
          }
      </div>
    )
  }
}
export default trace
