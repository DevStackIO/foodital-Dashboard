import axios from 'axios';

export default axios.create({
    baseURL: 'localhost:8004/auth/register'
});