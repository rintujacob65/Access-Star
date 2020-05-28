import axios from '../config/axios'
import Swal from 'sweetalert2' 

export const setEmployees = (employees) => {
    return {
        type : 'SET_EMPLOYEES',
        payload : employees
    }
}
export const startSetEmployees = () => {
    return(dispatch) => {
        axios.get('/employees',{
            headers : {
                'x-auth' : localStorage.getItem('authToken')
            }
        })
        .then((response) => {
            console.log("data",response.data)
            const employees = response.data
            dispatch(setEmployees(employees))
        })
    }
}
//sync
export const addEmployee = (employee) => {
    return { type :'ADD_EMPLOYEE',payload:employee}
}

//async

export const startAddEmployee = (formData,redirect) => {
    return(dispatch) => {
        axios.post('/employees', formData,{
            headers : {
                'x-auth' : localStorage.getItem('authToken')
            }
        })
        .then((response) => {
            
            if(response.data.hasOwnProperty('errors')){
                const displayMessages = []
                for(const key in response.data.errors){
                    displayMessages.push(response.data.errors[key].message)
                }
                Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text:   `${displayMessages.join(', ')}`,
                    confirmButtonText: 'Ok'
                  })
            } else {
            const employee = response.data
            console.log("employee",employee)
            dispatch(addEmployee(employee))
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text:   'You have successfully done it',
                confirmButtonText: 'Ok'
              })
            redirect()
           }
        })
    }
}
export const removeEmployee = (id) => {
    return {
        type : 'REMOVE_EMPLOYEE', payload : id
    }
}
export const startRemoveEmployee = (id) => {
   return (dispatch) =>{
       axios.delete(`/employees/${id}`,{
           headers : {
               'x-auth' :localStorage.getItem('authToken')
           }
       })
       .then(response => {
          const employee = response.data
          dispatch(removeEmployee(employee._id))
       }) 
   }
}
