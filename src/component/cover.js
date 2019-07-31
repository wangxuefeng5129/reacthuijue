import React from 'react'
class cover extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      dataForm:{
        current:1,
        size:10
      }
    }
  }
  
  render() {
    return(
      <div>
        地埋柜
      </div>
    )
  }
}

export default cover
