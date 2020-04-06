import Axios from 'axios'

const axios = Axios.create({
    baseURL : 'http://localhost:3046'
})

export default axios