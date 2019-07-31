import React from 'react'
import './../assets/css/header.css'

class OurHeader extends React.Component{
  async back(){
    return await  this.props.history.push('/');
  }
  render() {
    return(
      <div>
        <div className="header">
          <span className='back' onClick={this.back.bind(this)}>返回</span>
          <span>地埋柜</span>
        </div>
      </div>
    )
  }
}

export default OurHeader
