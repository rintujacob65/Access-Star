import React from 'react'
import { connect } from 'react-redux'
import EmployeeForm from './Form'
import { startAddEmployee } from '../../../actions/employeesAction'
import Menu from '../Menu'
import '../Menu.css'


function EmployeeNew(props){
    const handleSubmit = (formData) =>{
       const redirect = () => props.history.push('/employees')
       props.dispatch(startAddEmployee(formData,redirect))
    }
    return(
        <div className="row row_details">
            <div className="col-sm-2 menu_outer">
                <Menu/>
            </div>
            <div className="col-sm-10 " style={{background: "#E5E5E5"}}>
                <EmployeeForm handleSubmit={handleSubmit}/>
            </div>
        </div>
    )
}
export default connect()(EmployeeNew)