import axios from 'axios';

export default axios.create({
    baseURL:'https://931c-2409-40f4-100c-e4fd-650c-6e6f-be85-a9e1.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}
});