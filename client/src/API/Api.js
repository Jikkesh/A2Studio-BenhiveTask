import axios from "axios";


const API = axios.create({ baseURL: 'http://localhost:5193' });

export const login = (body) => API.post('/login', body);
export const signup = (body) => API.post('/signup', body);


export const getAllProducts = () => API.get('/products');
export const getProduct = (id) => API.get(`/product/${id}`);

