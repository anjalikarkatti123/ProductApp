import axios from "axios"
const API_EMP_BASEURL = 'http://localhost:9093/v1/api/product'
export const createProduct=(product)=>{
    return(
        axios.post(API_EMP_BASEURL, product)
    )

}

export const deleteProduct=(productId) =>{
    return(
        axios.delete(API_EMP_BASEURL +'/'+ productId)
    )
}

export const getProduct=(productId) =>{
    return(
        axios.get(API_EMP_BASEURL +'/'+ productId)
    )
}

export const modifyProduct=(productId, product) =>{
    return(
        axios.put(API_EMP_BASEURL +'/'+ productId, product)
    )
}
