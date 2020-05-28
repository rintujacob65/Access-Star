import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'
import { startSetUser} from './actions/userAction'
import { startSetStocks } from './actions/stocksAction'
import { startSetEmployees } from './actions/employeesAction'
import 'bootstrap/dist/css/bootstrap.css'


const store = configureStore()
console.log(store.getState())

store.subscribe(() => {
    console.log(store.getState())
    
})


if(localStorage.getItem('authToken'))
{
   store.dispatch(startSetUser())
   store.dispatch(startSetStocks())
   store.dispatch(startSetEmployees())
}

const jsx = (
    <Provider store={store}>
        <App/>
    </Provider>
)
ReactDOM.render(jsx, document.getElementById('root'))