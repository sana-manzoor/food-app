import React,{useState} from 'react'
import { Navbar, Button, Container} from 'react-bootstrap'
import logo from '../Assets/l4.jpg'
import './admindashboard.css'
import Addfood from '../Components/Addfood'
import Userslist from '../Components/Userslist'
import Foodlist from '../Components/Foodlist'
import Orderlist from '../Components/Orderlist'
 import { Link, Route,Routes } from 'react-router-dom'
 import { useNavigate } from 'react-router-dom'






function Admindashboard() {

  const [isUsers, setIsUsers] = useState(false);
  const [isAdd, setIsAdd] = useState(false);
  const [isFood, setIsFood] = useState(false);
  const [isOrders, setIsOrders] = useState(false);
  


  const handleClick1 = event => {
    // 👇️ toggle shown state
    setIsUsers(current => !current);
    
  }

  const handleClick2 = event => {

    setIsFood(current => !current);
  }

  
  const handleClick3 = event => {

    setIsAdd(current => !current);
  }

  const handleClick4 = event => {

    setIsOrders(current => !current);


  }

  const navigate=useNavigate()

  const handlelogout=async()=>{
    localStorage.removeItem("currentUser")
    localStorage.removeItem("token")
    localStorage.removeItem("role")
     navigate('/')
  }

  return (
    <>
      <Navbar className='border shadow' >
        <Container>
          <Navbar.Brand ><img src={logo} alt="" style={{ height: '60px', width: '160px' }} className='img-fluid' /></Navbar.Brand>
          <span >
            {/* <Button variant="outline-danger" className='me-3' size='lg' style={{ textAlign: 'center' }} ><i class="fa-solid fa-cart-shopping fa-xl" style={{color: '#eb1e1e'}}></i>Cart</Button> */}
            <Button variant="outline-danger" size='lg' style={{ textAlign: 'center' }} onClick={handlelogout} > Log Out</Button>

          </span>
        </Container>
      </Navbar>

      <br /><br />


      <h1 className='mt-4 mb-3 ms-2' id='he1'>Welcome <span id='he2'>Admin!!</span></h1>

      <div className='d-flex-column justify-content-center align-items-center container ' >
        <div className=' container  border shadow fw-bolder mt-5 mb-5 dd' style={{backgroundColor:'#9C0906'}}>
          <div className='d-flex justify-content-evenly container'>
          {/* <span  className='ms-2 m-3  sp2'><Link to={"/userslist"}>Users List</Link></span> */}
          <span  className='ms-2 m-3  sp2' onClick={handleClick1}>users list</span>
          <span  className='ms-2 m-3  sp2' onClick={handleClick2}>items list</span>
          <span  className='ms-2 m-3  sp2' onClick={handleClick3}>add food</span>
          <span  className='ms-2 m-3  sp2' onClick={handleClick4}>orders list</span>


         
    

             {/* <span  className='ms-2 m-3  sp2'><Link to={"/foodlist"}>Items List</Link></span><br />
            <span  className='ms-2 m-3  sp2'><Link to={"/addfood"}>Add Items</Link></span><br />
            <span  className='ms-2 m-3  sp2'><Link to={"/orderlist"}>Checkout List</Link></span>  */}


          </div>
          
        </div>
          {/*
            👇️ show component on click */}
      {isUsers && <Userslist />}
      {
        isFood && <Foodlist/>
      }
      {
        isAdd && <Addfood/>

      }
      {
                isOrders && <Orderlist/>

      }
<br /><br />
      </div>


      <Routes>

        <Route path="/userslist" element={<Userslist/>}/>
       <Route path="/foodlist" element={<Foodlist/>}/>
        <Route path="/addfood" element={<Addfood/>}/>
        <Route path="/orderlist" element={<Orderlist/>}/> 

      </Routes>

    <br />
    </>
  )
}

export default Admindashboard