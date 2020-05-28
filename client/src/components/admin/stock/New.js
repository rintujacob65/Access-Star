import React from 'react'
import { connect } from 'react-redux'
import StockForm from './Form'
import { startAddStock } from '../../../actions/stocksAction'
import Menu from '../Menu'
import '../Menu.css'

function StockNew(props){
    const handleSubmit = (formData) =>{
       const redirect = () => props.history.push('/stocks')
       props.dispatch(startAddStock(formData,redirect))
    }
    return(
        <div>
           <div className="row row_details">
                <div className="col-sm-2 menu_outer">
                    <Menu/>
                </div>
                <div className="col-sm-10 " style={{background: "#E5E5E5"}}>
                    <StockForm handleSubmit={handleSubmit}/>
                </div>
            </div>
        </div>
    )
}
export default connect()(StockNew)