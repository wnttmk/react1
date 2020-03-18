import React,{Component} from 'react';
import {HashRouter,Route,Switch,Link,BrowserRouter as Router} from 'react-router-dom';
import loginFrame from './components/loginFrame';
import main from './components/main';
import register from './components/register'
import loginform from './components/loginform'


export default class routermapping extends Component{
    render(){
        return(
            <div>

            <Router>
                 <ul>
                <li><Link to='/'>首页</Link></li>
                <li><Link to='/about'>关于</Link></li>
                <li><Link to='/topics'>主题列表</Link></li>
                </ul> 
                
                <Route exact path='/' component={main} />
                <Route path='/about' component={loginFrame} />
             
            </Router>
        
            </div>
        )
    }
}