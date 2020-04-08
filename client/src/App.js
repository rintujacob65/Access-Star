import React from 'react'
import { BrowserRouter, Route} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/x-auth/login/Login'

function App(props){
    return(
        <div>
            <BrowserRouter>
                {/* <Route path="/" component={Home} exact={true} /> */}
                <Route path="/" component={Login} exact={true} />
            </BrowserRouter>
        </div>
     )  
}
export default App