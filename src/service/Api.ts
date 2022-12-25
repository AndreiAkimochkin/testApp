import axios from 'axios';

export default ()=>{
    return axios.create({
        baseURL:'https://63a30e7f9704d18da0847709.mockapi.io/'
    })
}