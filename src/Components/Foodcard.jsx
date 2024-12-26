import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import './foodcard.css'
import { BASE_URL } from '../Services/baseUrl';
import { addtoCart } from '../Services/allApis';
import { ToastContainer } from 'react-toastify';

function Foodcard({food , addtoCart }) {

  

  const [show, setShow] = useState(false);


  const onClick = (event) => {
    console.log(event.target.value);
    // Handle the data as needed
  };

 

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const handleAddtocart= async(foodId)=>{
  //   const  selfoodId=foodId
   
  //   const excistingUser = JSON.parse(localStorage.getItem("currentUser"))
  //   const userId=( excistingUser._id )
  //   console.log("productId :" ,selfoodId,"userId:" ,userId)
  //   const data={foodId:selfoodId , userId}
  //   const res=await addtoCart()
  //   if(res.status==200){
  //     console.log(res)
  //   }
  //   else{
  //     toast.error(res.response)

  //   }


  // }
  return (
    <>
     <div>
     
     </div>
          <Card style={{ width: '18rem'}}   className='border  shadow mt-3'>
            <Card.Img variant="top" src={`${BASE_URL}/upload/${food.food_image}`} onClick={handleShow} className='img-fluid' style={{ height: '180px' }} />
            <Card.Body>
              <Card.Title className='text-center te1'>{food.title} </Card.Title>
              <Card.Text className='text-center te2' >
                Price:{food.price}
              </Card.Text>
              
              <Button variant="outline-danger" size='lg' onClick={()=>addtoCart(food)} className='w-100' style={{ textAlign: 'center' }} ><i className="fa-solid fa-cart-plus" style={{ color: '#d5271a' }}></i>Cart </Button>

            </Card.Body>
          </Card>


       

       


    






      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          {/* <Modal.Title>Modal heading</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          <img src={`${BASE_URL}/upload/${food.food_image}`} className='w-100' style={{height:'330px'}} alt="" />
          <p id='pa1' className='m-3'>{food.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" size='lg' style={{ textAlign: 'center' }} onClick={handleClose} > Close</Button>
        </Modal.Footer>
      </Modal>
<ToastContainer/>
    </>
  )
}

export default Foodcard