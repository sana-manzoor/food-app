import React,{useState} from 'react'
import { toast } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css';
import { Button, Form, Row, Col } from 'react-bootstrap'
import logo from '../Assets/l4.jpg'
import './Auth.css'
import { Link } from 'react-router-dom';
import { registerApi } from '../Services/allApis';
import { useNavigate } from 'react-router-dom';
import { loginApi } from '../Services/allApis';



function Auth({ register }) {

  const registerForm = register ? true : false

  const [userData,setUserData]=useState({
    username:"",address:"",email:"",password:""
  })

 

  const navigate=useNavigate()


  // console.log(userData)
  const handleRegistration=async(e)=>{
    e.preventDefault()
    if(!userData.username || !userData.address || !userData.email || !userData.password){
    // alert("Enter values for every fields!!")
    toast.error("Enter Valid Values!!")
  }
  else{
    const res=await registerApi(userData)
    console.log(res)
    if(res.status===200){
      toast.success(`Registration of ${res.data.username} is Successfull!!`)
      setUserData({username:"",address:"",email:"",password:""})
      navigate('/login')

    }
    else{
      toast.error(res.response)
    }
  // console.log(res.response)
  }



  // console.log(userData)

  }

  const handleLogin=async (e)=>{
    e.preventDefault()
    console.log(userData)
    const{email,password}=userData
  if(!email || !password){
    toast.info("Enter Email and Password!!")
  }
  else{
    const res=await loginApi(userData)
    console.log(res)
    if(res.status === 200){
      localStorage.setItem("currentUser",JSON.stringify(res.data.excistingUser))
      localStorage.setItem("role",res.data.role)
      localStorage.setItem("token",res.data.token)
      toast.success("Login Successfull!!")
      setUserData({email:"",password:""})
     
      if(localStorage.getItem("role")=="admin"){
          navigate('/admindashboard')
      }
      else{
        navigate('/')
      }
      
    }
    else{
      toast.error("Login Failed!!")
    }
  }
  }

  return (
    <div className=' align-items-center container' style={{ width: '1000px' }}>

      <div className='container border shadow fw-bolder mt-5 mb-5'>

        <Link to={'/'} style={{ textDecoration: 'none' }} className='d-flex align-items-center m-3'>
          <i class="fa-solid fa-circle-arrow-left fa-2x" style={{ color: '#db3214' }}></i>
          <span className='btn text-center p-0 m-0 '></span>
        </Link>
        <div className=' rounded '  >
          {/* style={{backgroundColor:'#F5E3E3'}}  */}

          <div className='d-flex justify-content-center mt-4 mb-3' >
            <img src={logo} alt="" style={{ height: '70px', width: '160px', textAlign: 'center' }} className='img-fluid ' />
            {/* <h2>SIGN UP</h2> */}
          </div><br /><br />

          <div className='row align-items-center'>
            <div className='col-lg-6'>
              <img src=" https://www.pngplay.com/wp-content/uploads/2/Burger-Transparent-Images.png " className='img-fluid ' style={{ height: '360px' }} alt="" />
            </div>
            <div className='col-lg-6'>
              <div className='d-flex align-items-center flex-column'>


                <form className='w-100  mt-4' >

                  {
                    registerForm &&
                    <>
                    <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label style={{ fontSize: '16.5px', fontWeight: '400' }} column sm="2">
                        Username:
                      </Form.Label>
                      <Col sm="10">
                        <Form.Control  type="text" placeholder="Enter Your Name" onChange={(e)=>{setUserData({...userData,username:e.target.value})}} />
                      </Col>
                      </Form.Group>
                      <Form.Group  as={Row} className="mb-3" controlId="exampleForm.ControlInput2">
                      <Form.Label style={{ fontSize: '17px', fontWeight: '400' }} column sm="2">
                      Address:
                    </Form.Label>
                    <Col sm="10">
                      <Form.Control as="textarea" placeholder="Enter Your Address"  onChange={(e)=>{setUserData({...userData,address:e.target.value})}} />
                    </Col>
                    </Form.Group>
                  </>
                  }

                  <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput3">
                    <Form.Label style={{ fontSize: '17px', fontWeight: '400' }} column sm="2">
                      Email:
                    </Form.Label>
                    <Col sm="10">
                      <Form.Control type="text" placeholder="Enter Your Email"  onChange={(e)=>{setUserData({...userData,email:e.target.value})}} />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput4">
                    <Form.Label style={{ fontSize: '16.5px', fontWeight: '400' }} column sm="2">
                      Password:
                    </Form.Label>
                    <Col sm="10">
                      <Form.Control type="password" placeholder="Password" onChange={(e)=>{setUserData({...userData,password:e.target.value})}} />
                    </Col>
                  </Form.Group>



                  {
                    registerForm ?
                      <div className='d-flex justify-content-center  align-items-center'>
                        <Button variant="outline-danger" className='btn m-4 ' style={{ textAlign: 'center' }} onClick={handleRegistration}>SIGN UP</Button>
                        <Link to={'/login'} className='text-danger l1'>Already a User?Sign in..</Link>

                      </div> :
                      <div className='d-flex justify-content-center  align-items-center'>
                        <Button variant="outline-danger" className='btn m-4 ' style={{ textAlign: 'center' }} onClick={handleLogin}>SIGN IN</Button>
                        <Link to={'/register'} className='text-danger l1'>New User?Sign Up..</Link>

                      </div>
                  }

                </form><br />




              </div>
            </div>
          </div>

        </div><br /><br /><br />
      </div>
      {/* <ToastContainer/>  */}
    </div>
  )
}

export default Auth