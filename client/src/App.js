import React from 'react'
import { BrowserRouter, Route} from 'react-router-dom'
// import Home from './components/Home'
import Login from './components/x-auth/login/Login'
import Register from './components/x-auth/Register/Register'

function App(props){
    return(
        <div className="col-md-12">
            <BrowserRouter>
                {/* <Route path="/" component={Home} exact={true} /> */}
                <Route path="/login" component={Login} exact={true} />
                <Route path="/register" component={Register} exact={true} />
            </BrowserRouter>
        </div>
     )  
}
export default App