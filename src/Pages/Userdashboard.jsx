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
import { ToastContainer, toast } from 'react-toastify'
import { Modal ,Card , Button} from 'react-bootstrap'
import { BASE_URL } from '../Services/baseUrl'
import { addcart } from '../Services/allApis'
import { getcart } from '../Services/allApis'



function Userdashboard() {

  const [search, setSearch] = useState("")
  const [allFood, setAllFood] = useState([])

  const [showCart, setShowCart] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null); // Track selected item for modal


  const [show, setShow] = useState(false);

  const [id,setId]=useState("")
  
  
    const onClick = (event) => {
      console.log(event.target.value);
      // Handle the data as needed
    };
  
   const navigate=useNavigate()
  
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

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


  const userr=()=>{
    if (localStorage.getItem("currentUser")) {
        const uid = JSON.parse(localStorage.getItem("currentUser"))
        // console.log(studentid)
        setId({ ...id, uid })
        console.log(id)
    }
   
}
console.log(id)

const addtocart=async(item)=>{
    if(!localStorage.getItem("currentUser")){
      alert("Login First!!")
      navigate('/login')
    }
    else{
    const dataToSend = { pid:item._id, title:item.title ,price:item.price , category: item.category ,description:item.description,food_image:item.food_image,uid: id.uid};
        console.log(dataToSend)
        const res1 = await addcart(dataToSend) 
        console.log(res1)
        if (res1.status === 201) {   
           alert("Item added to cart!!")
           navigate('/cart')
        }
        else{
            alert("Product Already excists in cart")
        }
      }
  }



useEffect(() => {

  userr()
}, [])
  

  console.log(cart)


  const handleShow = (item) => {
    setSelectedItem(item); // Set the selected item when an image is clicked
  };

  const handleClose = () => {
    setSelectedItem(null); // Close modal by resetting selected item
  };


console.log(selectedItem)

  console.log(search)

  return (
    <>
      <Header  />


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

            <div className='container'>
              <Row className=" mt-5">
                {allFood ? allFood.map((item, index) => (
                  <Col key={index} xs={6} sm={6} md={4} lg={3} className="mb-4">
                     <Card    className='border  shadow mt-3'>
            <Card.Img variant="top" src={`${BASE_URL}/upload/${item.food_image}`}  onClick={() => handleShow(item)}  className='img-fluid' style={{ height: '180px' }} />
            <Card.Body>
              <Card.Title className='text-center te1'>{item.title} </Card.Title>
              <Card.Text className='text-center te2' >
                Price:{item.price}
              </Card.Text>
              
              <Button variant="outline-danger" size='lg' onClick={()=>addtocart(item)} className='w-100' style={{ textAlign: 'center' }} ><i className="fa-solid fa-cart-plus" style={{ color: '#d5271a' }}></i>Cart </Button>

            </Card.Body>
          </Card>

          </Col>
                )) : (
                  <h2 className="text-danger">No Items Available!!</h2>
                )}
              </Row>

            </div>
       

    
            <Modal show={selectedItem !== null} onHide={handleClose}>
    <Modal.Header>
        {/* Optional: Add a title or leave blank */}
    </Modal.Header>
    <Modal.Body>
        {selectedItem && ( // Ensure selectedItem is not null
            <>
                <img
                    src={`${BASE_URL}/upload/${selectedItem.food_image}`}
                    className="w-100"
                    style={{ height: '330px' }}
                    alt="Food item"
                />
                <p id="pa1" className="m-3">{selectedItem.description}</p>
            </>
        )}
    </Modal.Body>
    <Modal.Footer>
        <Button
            variant="outline-danger"
            size="lg"
            style={{ textAlign: 'center' }}
            onClick={handleClose}
        >
            Close
        </Button>
    </Modal.Footer>
</Modal>


      


      <ToastContainer />

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
      <Dropdown.selectedItem href="#/action-1">Action</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
  -----------------------------------------------------------------------------------------------------
   */