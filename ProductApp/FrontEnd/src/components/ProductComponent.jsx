
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createProduct, getProduct, modifyProduct } from '../services/Services'
import { useParams } from 'react-router-dom'
const ProductComponent = () => {
   const [productName, setProductName] = useState('')
   const [productType, setProductType] = useState('')
   const [productDesc, setProductDesc] = useState('')

   const {id} = useParams()
   const navigate = useNavigate()
   
   const handleProductName=(e)=>{
    setProductName(e.target.value)
   }

   const handleProductType=(e)=>{
    setProductType(e.target.value)
   }

   const handleProductDesc=(e)=>{
    setProductDesc(e.target.value)
   }

   const navigateHome=()=>{
    navigate("/")
   }

   const saveProduct=(e)=>{
    e.preventDefault()
    const product = {productName, productType , productDesc}
    console.log(product)

    if(id){
        modifyProduct(id, product).then((response) =>{
            console.log(response.data)
            navigate("/") 
        }).catch(error =>{
            console.log(error)
        })
    }else {
        createProduct(product)
    .then((response) =>{
        console.log(response.data)
        navigate("/")
    })
    .catch(error =>{
        console.log(error)
    })
    }
    
   }

   useEffect(() =>{
        getProduct(id).then((response) =>{
            setProductName(response.data.productName)
            setProductType(response.data.productType)
            setProductDesc(response.data.productDesc)
        })
   },{id})
   const changeHeading=()=>{
    console.log('Product Id change Heading :'+id);
    
     if(id){
        return <h3 className='text-center'>Edit Products</h3>
     }
     else{
        return <h3 className='text-center'>Add Products</h3>
     }
   }
    return (
        <div>
            <div className="container-fluid">
                <div className="row justify-content-evenly">
                    {
                        changeHeading()
                    }
                    <div className="card col-md-6">
                        <div className="card-body">
                           <form>
                            <div className='form-group'>
                                <label className='form-label'>Product Name:</label>
                                <div>
                                <input 
                                        type='text'
                                        placeholder='Enter Product Name'
                                        name='productName'
                                        value={productName}
                                        onChange={handleProductName}
                                    /> 
                                </div>
                            </div>

                            <div className='form-group'>
                                <label className='form-label'>Product Type:</label>
                                <div>
                                <input 
                                        type='text'
                                        placeholder='Enter Product Type'
                                        name='productType'
                                        value={productType}
                                        onChange={handleProductType}
                                    /> 
                                </div>
                            </div>

                            <div className='form-group mb-4'>
                                <label className='form-label'>Product Description:</label>
                                <div>
                                <input 
                                        type='text'
                                        placeholder='Enter Description'
                                        name='productDesc'
                                        value={productDesc}
                                        onChange={handleProductDesc}
                                    /> 
                                </div>
                            </div>
                            <button className='btn btn-success' onClick={saveProduct}>Save</button>
                            <button className='btn btn-danger ms-2' onClick={navigateHome}>Cancel</button>
                           </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductComponent

