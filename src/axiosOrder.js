import axios from 'axios';

const axiosOrder = axios.create({
    baseURL: 'https://resto-6ad24.firebaseio.com/'
});

export default axiosOrder;