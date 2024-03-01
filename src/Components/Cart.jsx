import React, { useEffect, useState } from 'react'
import Header from './Header'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../Services/baseUrl'
import { addtoCart } from '../Services/allApis'
import { ToastContainer,toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import './cart.css'

function Cart({ cart,showCart }) {

  const [upCart,setUpCart]=useState([])

  const [check,setCheck]=useState("")

  useEffect(()=>{
      setUpCart(cart)
  },[cart])

  const navigate=useNavigate()

  // const handleAddtocart=async()=>{
  
    
  //   const {title,price,userId}=cart
  //   let body={title,price,userId}
  //   const res=await addtoCart(body)

  //   if(res.status === 200){
  //     console.log(res.data)
  // }
  // else{
  //     console.log(res.response.data)
  // }


  // }

  const handledelete=(_id)=>{
    const arr=upCart.filter((item)=>item._id !== _id )
    setUpCart(arr)
  }

  const handleCheckout=()=>{
    setUpCart([])

    toast.success("Order Placed Successfully!!")
    
    
  }

  

  // console.log(check)
  return (
    <>
      
      <br />
      {/* <Link to={'/userdashboard'} style={{ textDecoration: 'none' }} className='d-flex align-items-center m-3'>
        <i class="fa-solid fa-circle-arrow-left fa-2x" style={{ color: '#db3214' }}></i>
        <span className='btn text-center p-0 m-0 '></span>
      </Link> */}
      <br />
      <div className='row align-items-center ms-5 mb-5'>
        <div className='col-lg-7'>

          {/* first row */}

          {
            upCart.map((item, cartindex) => {

              return (

                <div className='row align-items-center border shadow mb-3 fnt'>
                  <div className='col-lg-6 '>
                    <h3 className='mb-3 '>{item.title}</h3>

                    <Button variant="outline-danger" className='btn-sm me-1  '
                    
                    onClick={()=>{
                      const newCart=upCart.map((item,index)=>{
                        return cartindex=== index ? { ...item, quantity : item.quantity - 1} :item
                      })
                      setUpCart(newCart)
                      }}
                    
                    > - </Button>
                    <span className='h5'> {item.quantity} </span>
                    <Button variant="outline-danger" className='btn-sm ms-1 '

                     onClick={()=>{
                      const newCart=upCart.map((item,index)=>{
                        return cartindex=== index ? { ...item, quantity : item.quantity +1} :item
                      })
                      setUpCart(newCart)
                      }}

                      >+</Button>
                    <h5 className='mt-3 mb-2' >Price:{item.price * item.quantity}</h5>
                  </div>
                  <div className='col-lg-4'>
                    <img src={`${BASE_URL}/upload/${item.food_image}`} width={120} alt="" />

                  </div>

                  <div className='col-lg-2'>
                    <i className="fa-solid fa-trash fa-lg " onClick={()=>handledelete(item._id)} style={{ color: '#db1414' }}></i>

                  </div>


                </div>


              )
            })


          }






        </div>


      

    
 
 <div className='col-lg-5'>
            <div className='d-flex align-items-center flex-column'>
             
              <h2>SubTotal:₹
                {
                    upCart.map(item=>item.price * item.quantity).reduce((total,value)=>total + value,0)
                }
                
              </h2><br />
              <Button variant="outline-danger" style={{ textAlign: 'center' }} onClick={handleCheckout} >CHECK OUT</Button>

            </div>
          </div>
 

      </div>
      <ToastContainer/>
    </>
  )
}

export default Cart