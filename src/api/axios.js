import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:8080' //Puerto en el que corre el backend
});