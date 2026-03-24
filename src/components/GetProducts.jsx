import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Carousel from './Carousel'


const GetProducts = () => {
  const [products,setProducts]=useState([]) //empty array
  const [loading,setLoading]=useState("")
  const [error,setError]=useState("")

  const navigate=useNavigate()

  const img_url="https://ryankindi.alwaysdata.net/static/images/"

  const getProducts=async () =>{
    setError("")
    setLoading("Wait as we load products...")
    try {
      const response=await axios.get("https://ryankindi.alwaysdata.net/api/get_product_details")

      setLoading("")
      setProducts(response.data.message)

    } catch (error) {
      setLoading("")
      setError(error.message)
    }
  }
  
  useEffect(()=>{
    getProducts()
  },[])

  return (
    <div className='row mt-4'>
      <div>
        <a href="https://www.animalfeeds.co.ke/"><img src="/Ad2.jpg" alt="" className='ad' /></a>
      </div>
      <h2 className='mt-3 text-success text-center'>Available Animals</h2>
      <h5 className='text-dark'>{loading}</h5>
      <h5 className='text-danger'>{error}</h5>

      {/* map over products and display them */}
      {products.map((product)=>(
        <div className='justify-content-center col-md-3'>
          <div className='card shadow text-center mb-4 p-4 card-margin' style={{backgroundColor: "burlywood"}}>
            <img src={img_url+product.product_photo} alt="" className='product_img mt-2'/>
            <div className='card-body'>
              <h5 className='mt-2'>{product.product_name}</h5>
              <h5 className='text-muted'>{product.product_description}</h5>
              <h5 className='text-dark'>Ksh: {product.product_cost}</h5>
              {/* when buy now is clicked as we navigate we carry/parse all the details of the current product that was clicked */}
              <button className='btn text-light' style={{backgroundColor: "#022d05"}} onClick={()=>navigate("/makepayment",{state:{product}})}>Buy Now</button>
            </div>
          </div>
        </div>

      ))
      
      }

    </div>
  )
}

export default GetProducts