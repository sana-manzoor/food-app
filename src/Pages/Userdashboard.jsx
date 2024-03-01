import React, { useState, useEffect } from 'react'
import Header from '../Components/Header'
import img from '../Assets/pho2.png'
import './userdashboard.css'
import { Row, Col, Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { allFooditems } from '../Services/allApis'
import Foodcard from '../Components/Foodcard'
import { useNavigate } from 'react-router-dom'
import Cart from '../Components/Cart'
import { ToastContainer ,toast} from 'react-toastify'



function Userdashboard() {

  const [search, setSearch] = useState("")
  const [allFood, setAllFood] = useState([])

  const [showCart, setShowCart] = useState(false)

  const [cart, setCart] = useState([])

  useEffect(() => {

    getallFood()

  }, [search])





  const getallFood = async () => {
    const result = await allFooditems(search)
    // const result = await allFooditems()
    console.log(result)

    if (result.status === 200) {
      console.log(result.data)
      setAllFood(result.data)
      console.log(allFood)
    }
  }

  // const handleClick= (item)=>{
  //   // let isPresent=false
  //   // cart.map((allFood)=>{
  //   //   if(item.id == allFood.id){
  //   //     isPresent= true

  //   //   }
  //   // })
  //   // if(isPresent){
  //   //   return

  //     setCart([...cart,item]);
  //    const array=cart
  //    console.log(array)


  // //   }

  //  }


  const addtoCart = (data) => {
    console.log(data)
    setCart([...cart, { ...data, quantity: 1 }])
  }

  console.log(cart)

  const handleShow = (value) => {
    setShowCart(value)

  }


  // const handleChange=(item,d)=>{
  //   const ind=cart.indexOf(item)
  //   const arr=cart
  //   arr[ind].amount +=d
  //   if(arr[ind].amount === 0)arr[ind].amount = 1;
  //   setCart([...arr]);
  // }




  console.log(search)

  return (
    <>
      <Header count={cart.length} handleShow={handleShow}  />


      {

        showCart ?
          <Cart cart={cart} showCart={showCart}></Cart>
          
          :
          <>
            <div style={{ backgroundImage: `url(${img})` }} id='b1' className='img-fluid  mt-4 mb-5' >

              

              {/* <img src={img} className='img-fluid container-fluid'style={{height:'500px'}} alt="" /> */}
              <div id='b2'>
                <h1 className='mb-2' style={{ fontSize: '52px' }}>We dont</h1>
                <h1 className='mb-2' style={{ fontSize: '52px' }} >Make it until</h1>
                <h1 id='b3'>You order it!!</h1>
                <div className='d-flex align-items-center border shadow  rounded  mb-4 ' id='b4'>
                  <input type="text" placeholder='Search here to Explore' className='form-control boder shadow  rounded' style={{ height: '60px' }} onChange={(e) => { setSearch(e.target.value) }} />
                  {/* <div className='mx-3 ps-3  text-center'>
                  <i className="fa-solid fa-magnifying-glass fa-lg"></i>

                </div> */}
                </div>


              </div>
            </div>
            <br />

            <div className='container-fluid'>
              <Row className='m-3 mt-5 '>

                {
                  allFood ? allFood.map(item => (
                    <Col className='ms-1 mb-5' >
                      <Foodcard food={item} addtoCart={addtoCart} />
                    </Col>
                  ))
                    : <h2 className='text-danger'>No Items Available!!</h2>
                }

              </Row>

            </div>
          </>

      }
 
 
 <ToastContainer/>

    </>
  )
}

export default Userdashboard


















/* ---------------------------------------------------------------------------------------------------

  <Dropdown>
    <Dropdown.Toggle variant="danger" id="dropdown-basic" className='btn btn-lg p-2 m-2' >
      <span className='p-2'>FILTER</span>
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
  -----------------------------------------------------------------------------------------------------
   */