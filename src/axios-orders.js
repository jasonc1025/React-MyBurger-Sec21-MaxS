import axios from 'axios';

const instance = axios.create({
    // [jwc]+1 baseURL: 'https://react-burger.firebaseio.com/'
    baseURL: 'https://myburger-react-maxs.firebaseio.com/'
});

export default instance;