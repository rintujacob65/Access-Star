import React from 'react'
import { connect} from 'react-redux'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class EmployeeForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
                name : '',
                profilePic : '',
                mobile : '',
                birthDate : '',
                address : '',
                emiratesIdImage : '',
                visaImage : '',
                passportNo : '',
                passportImage : ''
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
        const { name, profilePic, 
                mobile, birthDate,
                address, emiratesIdImage,
                visaImage,passportNo,
                passportImage } = this.state

        const formData = new FormData();
        formData.append('name',name);
        formData.append('profilePic',profilePic);
        formData.append('mobile',mobile);
        formData.append('birthDate',birthDate);
        formData.append('address',address);
        formData.append('emiratesIdImage',emiratesIdImage);
        formData.append('visaImage',visaImage);
        formData.append('passportNo',passportNo);
        formData.append('passportImage',passportImage);
        
        console.log("formData",formData)
       this.props.handleSubmit(formData)
    }
    render(){
        return(
            <div className="form_outer">
              <h2 className="mt-4">Add Employee</h2>
               <form onSubmit={this.handleSubmit} className="form ml-3">
               <div className="form-group row">
                    <label 
                        htmlFor="name" 
                        className="col-sm-5 col-form-label text-muted"
                    >
                        Name
                    </label>
                    <div className="col-sm-7">
                        <input 
                            type="text" 
                            value ={this.state.name}
                            onChange={this.handleChange}
                            name ="name"
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
                        Profile Pic
                    </label>
                    <div className="col-sm-7">
                        <input
                            type="file" 
                            onChange={this.fileHandle}
                            name="profilePic"
                            className="form-control-file"
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label 
                        htmlFor="name" 
                        className="col-sm-5 col-form-label text-muted"
                    >
                        Mobile
                    </label>
                    <div className="col-sm-7">
                        <input 
                            type="text" 
                            value={this.state.mobile}
                            onChange={this.handleChange}
                            name="mobile" 
                            className="form-control"
                        />
                    </div>
                </div> 
                <div className="form-group row">
                    <label 
                        htmlFor="name" 
                        className="col-sm-5 col-form-label text-muted"
                    >
                        Birth Date
                    </label>
                    <div className="col-sm-7">
                        <input 
                            type="text "
                            value={this.state.birthDate}
                            onChange={this.handleChange}
                            name="birthDate" 
                            className="form-control"
                        />
                    </div>
                </div>  
                <div className="form-group row">
                    <label 
                        htmlFor="name" 
                        className="col-sm-5 col-form-label text-muted"
                    >
                        Address
                    </label>
                    <div className="col-sm-7">
                        <textarea type="text "
                                value={this.state.address}
                                onChange={this.handleChange}
                                name="address" 
                                className="form-control"
                            >
                        </textarea>
                    </div>
                </div>                      
                <div className="form-group row">
                    <label 
                        htmlFor="name" 
                        className="col-sm-5 col-form-label text-muted"
                    >
                        Emirates Id Image
                    </label>
                    <div className="col-sm-7">
                    <input type="file" 
                            onChange={this.fileHandle}
                            name="emiratesIdImage"
                            className="form-control-file"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label 
                        htmlFor="name" 
                        className="col-sm-5 col-form-label text-muted"
                    >
                       Visa Image
                    </label>
                    <div className="col-sm-7">
                    <input type="file" 
                            onChange={this.fileHandle}
                            name="visaImage"
                            className="form-control-file text-muted"/>
                    </div>
                </div>     
                <div className="form-group row">
                    <label 
                        htmlFor="name" 
                        className="col-sm-5 col-form-label text-muted"
                    >
                        Passport No
                    </label>
                    <div className="col-sm-7">
                    <input type="text "
                            value={this.state.passportNo}
                            onChange={this.handleChange}
                            name="passportNo" 
                            placeholder="passportNo"
                            className="form-control"
                            />
                    </div>
                </div>         
                <div className="form-group row">
                    <label 
                        htmlFor="name" 
                        className="col-sm-5 col-form-label text-muted"
                    >
                       Passport Image
                    </label>
                    <div className="col-sm-7">
                    <input type="file" 
                            onChange={this.fileHandle}
                            name="passportImage"
                            className="form-control-file text-muted"/>
                    </div>
                </div>          
                <div className="mt-4 ">
                    <input
                        type="submit"  
                        className="btn btn-primary m-3 "
                        value="submit"
                    /> 
                    <Link to="/employees" >
                        <button type="button" className="btn btn-primary">
                            Back
                        </button>
                    </Link>
                </div>      
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

export default connect(mapStateToProps)(EmployeeForm)