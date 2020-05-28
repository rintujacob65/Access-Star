const stocksInitialState = []

const stocksReducer = (state = stocksInitialState, action) => {
    switch(action.type){
        case 'SET_STOCKS' :{
            return [...action.payload]
        }
        case 'ADD_STOCK' : {
            return [...state,action.payload]
        }
        case 'REMOVE_STOCK' : {
            return state.filter(stock => stock._id != action.payload)
        }
        default : {
            return [...state]
        }
    }
}

export default stocksReducer