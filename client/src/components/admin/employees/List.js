import React from 'react'
import { connect } from 'react-redux'
import { startSetEmployees } from '../../../actions/employeesAction'
import './employees.css'
import { Link } from 'react-router-dom'
import Menu from '../Menu'

function EmployeeList(props){
    console.log("props",props)
    console.log("user" , props.user)
    if(props.employees.length == 0){
        props.dispatch(startSetEmployees())
    }
    return(
        <div className="row row_details" >
            <div className="col-sm-2 menu_outer">
                <Menu/>
            </div>
            <div className="col-sm-10">
                <div className="container" style={{float:"left"}}>
                    <Link to="/employees/new">  
                        <button className="addEmployee">
                            ADD EMPLOYEE
                        </button>
                    </Link>
                    <button className="addEmployee">{props.user}</button>
                </div>
                {
                    props.employees.map(employee => {
                        return <div key={employee._id} className="card employeeList" >
                               <img className="profilePic"
                                    src={employee.profilePic} 
                                     height="50px" width="50px" />
                                <div className="card-body">
                                    <p className="card-text" style={{textAlign :"center"}}>
                                        {employee.name}
                                    </p>
                                    <button className="card-text profileButton">
                                        View More
                                    </button>
                                </div>
                        </div>
                    })
                }
            </div>
            {/* </div> */}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        employees : state.employees,
        user : state.user.username
    }
}
export default connect(mapStateToProps)(EmployeeList)
