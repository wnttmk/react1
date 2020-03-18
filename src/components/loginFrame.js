import React,{Component} from 'react'
import render from 'react-dom'
import { HashRouter, Switch, Route,BrowserRouter as Router, Link } from 'react-router-dom'
import register from './register'
import loginform from './loginform'


export default class loginFrame extends Component{
    render(){
        return (
           
            <div>
                <span> {`${this.props.match.url}`}</span>
                <br></br>
                <Link to={`${this.props.match.url}/r`}>注册</Link> | <Link to={`${this.props.match.url}`}>登录</Link>
                   
                        {/* 这里不需要再加Router了,因为我们是被包含的.在router.js中已经加了该标签 */}
                        <Route path={`${this.props.match.url}/r`}  component={register}></Route>
                        <Route path={this.props.match.url} exact component={loginform}></Route>
                         
                    
bbbb
            </div>
            // <div>aaaa</div>
           
        )
    }
}