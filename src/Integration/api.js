import axios from 'axios'

const prod = axios.create({
    baseURL: 'https://www.hummelbrasil.com/api/catalog_system/pub/products/search?fq=productId:3831'
});

export default prod;