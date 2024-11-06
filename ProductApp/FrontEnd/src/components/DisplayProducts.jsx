import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { deleteProduct, getProduct } from '../services/Services'
const DisplayProducts = () => {
    const [products, setProducts] = useState([])

    const navigate = useNavigate()

    async function showProduct() {
        const response = await axios.get('http://localhost:9093/v1/api/products')
        const listproducts = response.data
        setProducts(listproducts)
        console.log(listproducts)

    }

    useEffect(() => {
        showProduct()
    }, [])

    const navigateCreateProduct = () => {
        navigate("/createproduct")
    }

    const removeProduct = (id) => {
        let status=confirm("Do you want to Delete the Product?")
        if(status){
            if (id) {
                deleteProduct(id).then((response) => {
                    showProduct()
                })
            }
        }
        
        console.log("Product Id :",id)
    }

    const editProduct=(id)=>{
       
        navigate(`/editproduct/${id}`)
        console.log('Product Id for Edit '+id)
    }
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <h3 className='text-center'>Products List</h3>

                    <div className="col-md-12">
                        <button className='btn btn-primary' onClick={navigateCreateProduct}>Add Product</button>
                        <table className='table table-bordered table-striped'>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Product Type</th>
                                    <th>Description</th>
                                    <th>Created Date</th>
                                    <th>ModifiedDate</th>
                                    <th colSpan='2'>Operations</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products.map((product) => {
                                        return (
                                            <>
                                                <tr key={product.id}>
                                                    <td>{product.id}</td>
                                                    <td>{product.productName}</td>
                                                    <td>{product.productType}</td>
                                                    <td>{product.productDesc}</td>
                                                    <td>{product.createdAt}</td>
                                                    <td>{product.updatedAt}</td>
                                                    <td>
                                                    <button className='btn btn-success' onClick={() =>editProduct(product.id)}>Edit</button>
                                                    </td>
                                                    <td>
                                                        <button className='btn btn-danger' onClick={() =>removeProduct(product.id)}>Delete</button>
                                                    </td>
                                                </tr>
                                            </>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DisplayProducts