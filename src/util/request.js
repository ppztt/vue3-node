import axios from 'axios'
import router from '@/router/index'
axios.interceptors.request.use(
    config => {
        if (localStorage.getItem('token')) {
            config.headers['Authorization'] = "Bearer " + localStorage.getItem('token')
        }
        return config
    },
    err => {
        return err
    }
)

axios.interceptors.response.use(
    response => {
        if (response.headers.authorization && response.headers.authorization != '') {
            localStorage.setItem('token', response.headers.authorization)
        }
        return response
    },
    err => {
        const {status} = err.response
        if(status == 401){
            localStorage.removeItem('token')
            router.push('/login')
        }
        return err
    }
)

export default axios