import axios from 'axios';

const apiDefault = () =>{
    const instance = axios.create({
        baseURL: 'http://10.156.145.168:3301',
        headers:{
            'access-token' : localStorage.getItem('access-token')
        }
    })
    return instance;
}
export default apiDefault;