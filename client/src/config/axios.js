import Axios from 'axios'

const axios = Axios.create({
    baseURL : 'http://localhost:3047'
})

export default axios