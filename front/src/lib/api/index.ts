import axios from 'axios';

const apiDefault = () =>{
    const instance = axios.create({
        baseURL: 'http://localhost:8000',
        headers:{
            'access-token' : localStorage.getItem('access-token')
        }
    })
    return instance;
}
export default apiDefault;