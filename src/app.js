import React from 'react'
import {BrowserRouter ,Switch, Route } from 'react-router-dom'
import Login from './component/login'
import Register from './component/register'
import Main from './component/main'
 
const app = () => {

    return (
      

        <BrowserRouter>
        
         <Switch>
        
        <Route exact path='/' component={Login } />
        <Route exact path='/reg' component={Register}/>
    <Route exact path='/main' component={Main}/>
       
        </Switch>
     </BrowserRouter>
      
        
    )
}

export default app


