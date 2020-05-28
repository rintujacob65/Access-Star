import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { startSetStocks,startRemoveStock} from '../../../actions/stocksAction'
import Swal from 'sweetalert2'
import './Stock.css'
//import { MDBDataTable } from 'mdbreact'

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
    // const data = {
    //     columns: [
    //         {
    //             label: 'brand',
    //             field: 'brand'
    //         },
    //         {
    //             label: 'rating',
    //             field: 'rating'
    //         },
    //         {
    //             label: 'quantity',
    //             field: 'quantity'
    //         }
    //     ],
    //     rows: props.stocks.map(stock => ({
    //         brand: <Link to={`/stocks/${stock._id}`}>{stock.brand}</Link>, 
    //         rating: stock.rating,
    //         quantity: stock.quantity,
                    
    //     }))
    // }

    return (
        <div classbrand="container mt-5">
            <div classbrand="row">
                <div classbrand="col-md-12">
                <h2>Listing stocks - {props.stocks.length} </h2>
                <table  className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Ratiing</th>
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
                                    <td>{stock.rating}</td>
                                    <td>{stock.quantity}</td>
                                    <td>
                                      <button>Edit</button>
                                        <button onClick = {() => {
                                                handleRemove(stock._id)
                                            }}>Delete</button>
                                    </td>
                            </tr>
                            
                        })
                            
                               }
                           
                    </tbody>
                    
                </table>
                <Link to="/stocks/new">
                    <button>Add</button>
                </Link>
                
                {/* <MDBDataTable 
                   striped 
                   bordered
                   data={data}
                /> */}
               
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