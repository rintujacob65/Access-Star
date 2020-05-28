import axios from '../config/axios'
import Swal from 'sweetalert2' 

export const setStocks = (stocks) => {
    return {
        type : 'SET_STOCKS',
        payload : stocks
    }
}
export const startSetStocks = () => {
    return(dispatch) => {
        axios.get('/stocks',{
            headers : {
                'x-auth' : localStorage.getItem('authToken')
            }
        })
        .then((response) => {
            console.log("data",response.data)
            const stocks = response.data
            dispatch(setStocks(stocks))
        })
    }
}
//sync
export const addStock = (stock) => {
    return { type :'ADD_STOCK',payload:stock}
}

//async

export const startAddStock = (formData,redirect) => {
    return(dispatch) => {
        axios.post('/stocks', formData,{
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
            const stock = response.data
            dispatch(addStock(stock))
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
export const removeStock = (id) => {
    return {
        type : 'REMOVE_STOCK', payload : id
    }
}
export const startRemoveStock = (id) => {
   return (dispatch) =>{
       axios.delete(`/stocks/${id}`,{
           headers : {
               'x-auth' :localStorage.getItem('authToken')
           }
       })
       .then(response => {
          const stock = response.data
          dispatch(removeStock(stock._id))
       }) 
   }
}
