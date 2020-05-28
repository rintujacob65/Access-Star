import React from 'react'
import { connect} from 'react-redux'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class StockForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
                brand : '',
                image : '',
                rating : '',
                quantity : ''
            }
    }
    fileHandle = (e) => {
        const file = e.target.files[0]
        console.log("file",file)
        this.setState({
            image : file
        })
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]  : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const { brand, image, rating, quantity } = this.state
        const formData = new FormData();
        formData.append('brand',brand);
        formData.append('image',image);
        formData.append('rating',rating);
        formData.append('quantity',quantity);
        
        console.log("formData",formData)
        this.props.handleSubmit(formData)
    }
    render(){
        return(
            <div className="form_outer" style={{height : "400px"}}>
                <h2 className="mt-4">Add Stock</h2>
                <form onSubmit={this.handleSubmit} className="form ml-3">
                <div className="form-group row">
                    <label 
                        htmlFor="name" 
                        className="col-sm-5 col-form-label text-muted"
                    >
                       Brand Name
                    </label>
                    <div className="col-sm-7">
                        <input 
                            type="text" 
                            value ={this.state.brand}
                            onChange={this.handleChange}
                            name ="brand"
                            className="form-control"
                            id="name"
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label 
                        htmlFor="name" 
                        className="col-sm-5 col-form-label text-muted"
                    >
                        Mobile Pic
                    </label>
                    <div className="col-sm-7">
                        <input
                            type="file" 
                            // value={this.state.image}
                            onChange={this.fileHandle}
                            name="image"
                            className="form-control-file text-muted"
                        />
                    </div>
                </div>  
                   
                   {/* <input type="text" 
                           value={this.state.rating}
                           onChange={this.handleChange}
                           name="rating" 
                           placeholder="rating"/> */}
                    <div className="form-group row">
                        <label 
                            htmlFor="name" 
                            className="col-sm-5 col-form-label text-muted"
                        >
                            Quantity
                        </label>
                    <div className="col-sm-7">
                        <input 
                            type="text" 
                            value={this.state.quantity}
                            onChange={this.handleChange}
                            name="quantity" 
                            className="form-control"
                            id="name"
                        />
                    </div>
                </div>
                   <input type="submit"  className="btn btn-primary m-3"
                        value="submit"/> 
                    <Link to="/stocks" >
                        <button type="button" className="btn btn-primary">
                            Back
                        </button>
                    </Link>  
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
   return{
       stock : state.stocks
   }
}

export default connect(mapStateToProps)(StockForm)