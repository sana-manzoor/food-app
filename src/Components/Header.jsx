import React, { useState,useEffect,useContext} from 'react'
import { Navbar, Container, Button, Modal } from 'react-bootstrap'
import logo from '../Assets/l4.jpg'
import './Header.css'
import { Link, useNavigate } from 'react-router-dom'
import Cart from './Cart'
import { cartResponseContext } from '../Context/ContextShare'
import { getcart } from '../Services/allApis'




function Header({ handleShow }) {

  const [isLogged,setIsLogged]=useState(false)
  const [id,setId]=useState()
  

  useEffect(()=>{
      if(localStorage.getItem("currentUser")){
        const uid = JSON.parse(localStorage.getItem("currentUser"))
        // console.log(studentid)
        setId( uid )
     
        setIsLogged(true)
     
      }
      else{
        setIsLogged(false)
      }
    },[])


    useEffect(() => {
      if (id) {
        cartss(); // Re-fetch cart data when the user navigates to this page
      }
    }, [id]); 

  const [price,setPrice]=useState(0)
  const [show, setShow] = useState(false);

  const {cartResponse,setCartResponse}=useContext(cartResponseContext)

  const [cart,setCart]=useState("")

  const [cartn,setCartn]=useState()


  


     const getCart=async()=>{
      const  ncart= await setCartResponse
       setCart(ncart)
      
     }


     const cartss = async () => {
           console.log(id)
           const result = await getcart(id)
           console.log(result)
           if (result.status === 200) {
             setCartn(result.data);
         } else {
             console.error("Failed to fetch cart:", result);
         }
       }

       const numberOfItemsInCart = cartn ? cartn.length : '';
  // -------------------------------------
//   useEffect(() => {
//     handlePrice()
// }, [])



  // const handleRemove=(id)=>{
  //   const arr=cart.filter((item)=>item.id != id)
  //   setCart(arr);
  //   handlePrice();
  // }

  // const handlePrice=()=>{
  //   let ans=0
  //   cart.map((item)=>(ans += item.amount + item.price))
  //   setPrice=ans
  // }

// ------------------------------------------------

  const navigate = useNavigate()


  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const handlelogout = async () => {
    localStorage.removeItem("currentUser")
    localStorage.removeItem("token")
    localStorage.removeItem("role")
    navigate('/')
  }


  // console.log(cart)


  //  const addtoCart=async()=>{

  //   navigate('/cart')

  //  }
console.log(id)


  return (
    <>
        
{/* 
      <Modal className='modal-xl'
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header >
          <Modal.Title>Cart </Modal.Title>
        </Modal.Header>
        <div className='row align-items-center ms-5 mb-5 mt-3'>
          <div className='col-lg-7'> */}

            {/* first row */}
            {/* <div className='row align-items-center border shadow mb-2'> */}

              {/* {

                 cart.map(item=>( 
                  <div className='col-lg-6 '>
                  <h5>title:{item.title}</h5>
                  <h5>Price:{item.price}</h5>
                  <h5>Quantity: 
                    <span>
                      <button>+</button>
                      <button>-</button>
                      </span>
                      </h5>
                </div>

                 ))
              }  */}
            

              {/* <div className='col-lg-4'>
                <img src=" https://www.pngplay.com/wp-content/uploads/2/Burger-Transparent-Images.png " className='img-fluid ' style={{ width: '120px' }} alt="" />

              </div>

              <div className='col-lg-2'>
                <i className="fa-solid fa-trash fa-lg " style={{ color: '#db1414' }}></i>

              </div>


            </div>

         

          </div>
          <div className='col-lg-5'>
            <div className='d-flex align-items-center flex-column'>
              <h2>SubTotal:₹700</h2><br />
              <Button variant="outline-danger" style={{ textAlign: 'center' }} >CHECK OUT</Button>

            </div>
          </div>



        </div> */
      //   <Modal.Footer>
      //     <Button variant="secondary" onClick={handleClose}>
      //       Close
      //     </Button>
      //     <Button variant="primary">Understood</Button>
      //   </Modal.Footer>
      // </Modal>
            }


      <Navbar className='border shadow rounded' >
        <Container>
          <Navbar.Brand ><img src={logo} alt="" style={{ height: '60px', width: '160px' }} className='img-fluid' /></Navbar.Brand>
          
          <span >

         
            <Button variant='danger'  className='me-3' size='lg' style={{ textAlign: 'center' }}  ><Link to={'/cart'}><i class="fa-solid fa-cart-shopping fa-xl" ></i>{numberOfItemsInCart}</Link></Button>

            {
                                isLogged?
                                
                                <Button variant="outline-danger" size='lg' style={{ textAlign: 'center' }}className='btn ' onClick={handlelogout} >Log out</Button>
                                :
                                <Link to={'/login'}><Button variant="outline-danger" size='lg' style={{ textAlign: 'center' }}  >Login</Button></Link>


                            }
            {/* <Button variant="outline-danger" size='lg' style={{ textAlign: 'center' }}  > </Button> */}

          </span>
        </Container>
      </Navbar>
      
      {/* <span className='d-flex align-items-center m-3' onClick={()=>handleShow(false)}>
                <i class="fa-solid fa-circle-arrow-left fa-2x" style={{ color: '#db3214' }}></i>
                <span className='btn text-center p-0 m-0 '></span>
              </span> */}
    </>
  )
}

export default Header