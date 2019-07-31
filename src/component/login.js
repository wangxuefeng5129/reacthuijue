import React from 'react'
import {loginByUsername} from './../api/login'
class login extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      userName:'',
      password:''
    };
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e){
    let InputName = e.target.name;
    let InputValue = e.target.value;
    this.setState({
      [ InputName ]: InputValue ,
    })
  }
  login(){
    loginByUsername(this.state.userName,this.state.password).then((res)=>{
      if(res.data.status == '200'){
        this.props.history.push('/');
        localStorage.setItem('ReactToken',res.data.data);
      }
    })
  }
  render() {
    let { userName, password } = this.state;
    return(
      <div>
        <input type="text" value={userName} placeholder='请输入用户名' onChange={this.handleChange} name="userName"/>
        <input type="text" value={password} placeholder='请输入密码' onChange={this.handleChange} name="password"/>
        <button onClick={this.login.bind(this)}>登录</button>
      </div>
    )
  }
}

export default login
