import React from 'react'
import {OnuList} from './../api/onu'
class onu extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      dataForm:{
        current:1,
        size:10
      }
    }
  }
  componentWillMount() {
    OnuList(this.state.dataForm).then((response) =>{
      console.log(response)
    })
  }
  
  render() {
    return(
      <div>
      
      </div>
    )
  }
}

export default onu
