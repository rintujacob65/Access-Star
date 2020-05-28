import React from 'react'
import { BrowserRouter, Route} from 'react-router-dom'
// import Home from './components/Home'
import Login from './components/x-auth/login/Login'
import Register from './components/x-auth/Register/Register'
import StockList from './components/admin/stock/List'
import StockNew from './components/admin/stock/New'
import EmployeeList from './components/admin/employees/List'
import EmployeeNew from './components/admin/employees/New'

function App(props){
    return(
        <div>
            <BrowserRouter>
                {/* <Route path="/" component={Home} exact={true} /> */}
                <Route path="/" component={Login} exact={true} />
                <Route path="/register" component={Register} exact={true} />
                <Route path="/stocks" component={StockList} exact={true} />
                <Route path="/employees" component={EmployeeList} exact={true} />
                <Route path="/employees/new" component={EmployeeNew} exact={true} />
                <Route path="/stocks/new" component={StockNew} exact={true} />
            </BrowserRouter>
        </div>
     )  
}
export default App