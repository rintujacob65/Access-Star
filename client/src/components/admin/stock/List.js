import React from 'react'
// import {MDBDataTable} from 'mdbreact';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { startSetStocks,startRemoveStock} from '../../../actions/stocksAction'
import Swal from 'sweetalert2'
import './Stock.css'
import Menu from '../Menu'

function StockList(props){
    const handleRemove = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.value) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
              props.dispatch(startRemoveStock(id))
            }
          })
    }
    if(props.stocks.length == 0){
        props.dispatch(startSetStocks())
    }

    return (
        <div className="row row_details" >
            <div className="col-sm-2 menu_outer">
                <Menu/>
            </div>
            <div className="col-sm-10">
                <div className=" table_outer">
                    <table  className="table  table_list">
                        <thead>
                            <tr >
                                <th></th>
                                <th>Name</th>
                                {/* <th>Ratiing</th> */}
                                <th>Quantity</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {      props.stocks.map(stock => {
                                return <tr key={stock._id}>
                                        <td>
                                            <img src={stock.image} 
                                                height="20px"
                                                width="30px" />
                                        </td>
                                        <td>{stock.brand}</td>
                                        {/* <td>{stock.rating}</td> */}
                                        <td>{stock.quantity}</td>
                                        <td>
                                        <button>Edit</button>
                                            <button onClick = {() => {
                                                    handleRemove(stock._id)
                                                }}>Delete</button>
                                            <Link to="/stocks/new">
                                                <button>Add</button>
                                            </Link>
                                        </td>
                                </tr>
                                
                            })
                                
                                }
                            
                        </tbody>
                        
                    </table>
                    
                </div> 
            </div>
        </div>
        
    )
}
const mapStateToProps = (state) => {
    return {
        stocks : state.stocks
    }
}
export default connect(mapStateToProps)(StockList)