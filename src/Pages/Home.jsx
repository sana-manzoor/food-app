import React,{useState,useEffect} from 'react'
import { Row, Col } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import './Home.css'
import Homefood from '../Components/Homefood'
import delImg from '../Assets/pic.png'
import { Button } from 'react-bootstrap'
import logo from '../Assets/l4.jpg'
import { Link } from 'react-router-dom'
import { selCategory } from '../Services/allApis'
import { useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'


function Home() {
        const [isLogged,setIsLogged]=useState(false)

        const [search,setSearch]=useState("")
        
        
        const [category,setCategory]=useState([])
        const navigate=useNavigate()

        useEffect(()=>{
           
            if(localStorage.getItem("currentUser")){
              setIsLogged(true)
            }
            else{
              setIsLogged(false)
            }
          },[])

        //   const handleClick = event => {
        //     console.log(event.currentTarget.id);
        //     setSearch(event.currentTarget.id)
        //     getCategory()
        //   };

        //   const getCategory=async(search)=>{

        //     const result=await selCategory(search)
            
        //         if(result.status === 200){
        //           console.log(result.data)
        //       setCategory(result.data)
        //           console.log(category)
        //           navigate('/category' ,  {state : {category : category}})
                 
        //         }
               
        //       }
    


         
        //   const onClick = (event) => {
        //     setSearch(event.target.value)
        //    console.log(search)
           
        //     getCategory()
        //      navigate('/category' , {state : {category : category}})
        //     // Handle the data as needed
        //   };

          
          const getCategory=async(e)=>{
          const result=await selCategory(e)
        
            if(result.status === 200){
              console.log(result)
              const newcat=result.data
              console.log(newcat)
              navigate('/category' , {state : {newcat : newcat}})

            //   console.log(category)
             
            // }
        //     // else{
        //     //   setProjects([])
             
          }
        }

        console.log(search)

    return (
        <>
            <Container fluid>
                <Row className=' align-items-center p-5  bg-danger ' style={{height:'100vh'}}>

                    <Col className='container fw-bolder ms-5' style={{ fontSize: '41px' }} >
                        <span className='text-warning' id='s1' >HUNGRY?</span>
                        <span>Just wait for <br /> food at</span>
                        <span className='text-warning' id='s1'> your door</span><br />
                        <p style={{ fontSize: '19px' }} className='mt-4' id='p1'>Get fresh home delivered food at your door step.Choose from a wide range of cuisines and what not!.Get it delivered fast and fresh with us..</p>
                              {

                                isLogged?
                                <Link to={'/userdashboard'}><Button variant="outline-light" size='lg' style={{ textAlign: 'center' }} className='btn mt-4'>Explore Now!</Button></Link>
                                :
                                <>
                                <Link to={'/userdashboard'}><Button variant="outline-light" size='lg' style={{ textAlign: 'center' }} className='btn mt-4'>Explore Now!</Button></Link>
                                <Link to={'/Login'}><Button variant="outline-light" size='lg' style={{ textAlign: 'center' }} className='btn mt-4 ms-4'>Login</Button></Link>
</>

                              }  
                               

                            
                    </Col>
                    <Col  className='container' >
                        <img src={delImg} className='img-fluid' alt="" />
                    </Col>
                </Row>
                <div className='mt-5 mb-5 ms-4'>
                    <span className='mb-4  mt-3 hd'>What's on your</span> <span className='hs text-danger'>mind?</span> 
                    <div className='cat-row'>
                        <img src="https://th.bing.com/th/id/OIP.5JRdKBJMsLjABeQ7W4ZZ_gHaHa?pid=ImgDet&w=203&h=203&c=7&dpr=1.3" className='cat' id='shawarma'   onClick={(e)=>getCategory(e.target.id)}   alt="" />
                        <img src="https://th.bing.com/th/id/OIP.wZ9TIXABLaRIq6TLMm3rSwHaHa?w=199&h=199&c=7&r=0&o=5&dpr=1.3&pid=1.7" className='cat' alt="" id='burger' onClick={(e)=>getCategory(e.target.id)} />
                        <img src="https://th.bing.com/th/id/OIP.3SBuAgmrWgnoWPeFvIAoRQAAAA?w=170&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7" className='cat' alt="" id='drinks' onClick={(e)=>getCategory(e.target.id)} />
                        <img src="https://th.bing.com/th/id/OIP.yj3KSZ8-9yO39aYkZStEkgHaHa?w=740&h=740&rs=1&pid=ImgDetMain" className='cat' alt="" id='biriyani/rice' onClick={(e)=>getCategory(e.target.id)} />
                        <img src="https://th.bing.com/th/id/OIP.C3Ep0grJrP7VQASs-3ocnwHaFY?rs=1&pid=ImgDetMain" className='cat' alt=""  id='chinese' onClick={(e)=>getCategory(e.target.id)}/>
                        <img src="https://th.bing.com/th/id/OIP.uQ6VYOIcbO3NdEWGlVlIVQHaI6?rs=1&pid=ImgDetMain" id='icecream' className='cat' alt=""  onClick={(e)=>getCategory(e.target.id)} />
                        <img src="https://th.bing.com/th/id/OIP.my1sgvQ1t_GaoyMKoyQCKAHaGW?w=182&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" style={{ width: '150px', height: '190px' }} className='cat' alt=""  id='pizza' onClick={(e)=>getCategory(e.target.id)}/>
                        <img src="https://th.bing.com/th/id/OIP.dOJWqY9KjSXtPI155es2-gAAAA?w=164&h=191&c=7&r=0&o=5&dpr=1.3&pid=1.7" style={{ width: '150px', height: '170px' }} className='cat'  id='cake' onClick={(e)=>getCategory(e.target.id)} alt="" />


                    </div>
                </div> <br />

                <div className='mt-5 ms-4'>
                    <h3 className='mb-4 text-danger text-center pt-5'>What we serve</h3>
                    <div className='container fw-bolder ms-5 text-center s1' style={{ fontSize: '41px' }}>
                        <span>Just sit back at home <br /> we will</span>
                        <span className='text-danger' id='s1'> take care!</span><br />
                    </div>
                    <p style={{ fontSize: '18px' }} className='mt-4 text-center' id='p2'> We provide a convenient and efficient way for people to enjoy a wide variety of cuisines without the need to leave <br /> their homes.The quality of food assured with fresh and high-quality ingredients, ensuring that each meal is tasty and healthy.</p>
                    <Row className='mt-4 mb-5 ms-5'>
                        <Col className='mt-3 ms-5 ab'>
                            <img src="https://th.bing.com/th/id/OIP.phG2zQUT16By-_u1HqEGkgAAAA?pid=ImgDet&w=203&h=203&c=7&dpr=1.3" className='img-fluid img-center' id='i1' alt="" />
                            <h4 className='ms-5 mt-2' id='hh1' >ORIGINAL</h4>
                            <p style={{ fontSize: '17px', marginRight: '165px' }} className='mt-4' id='p2'>All our recipies are authentic it means that the recipe and preparation closely adhere to traditional methods from the dish’s country of origin.</p>

                        </Col>
                        <Col className='mt-3 ab'>
                            <img src="https://th.bing.com/th/id/OIP.-EMufvsaSEwG-DtXK86o4QHaHJ?pid=ImgDet&w=203&h=195&c=7&dpr=1.3" className='img-fluid img-center' id='i1' alt="" />
                            <h4 className='ms-3 mt-2' id='hh1' >QUALITY FOODS</h4>
                            <p style={{ fontSize: '17px', marginRight: '165px' }} className='mt-4 ' id='p2'>Quality is one of the key factors that can we assure you of. By offering exceptional food,we are able to give you a better health and lifestyle. </p>

                        </Col>
                        <Col className='mt-3 ab'>
                            <img src="https://th.bing.com/th/id/OIP.6_FDOOKvbbHC3M6H8whZXQHaHa?w=182&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7" className='img-fluid img-center' id='i1' alt="" />
                            <h4 className='ms-3 mt-2' id='hh1' >FASTEST DELIVERY</h4>
                            <p style={{ fontSize: '17px', marginRight: '165px' }} className='mt-4  ' id='p2'>When it comes to food delivery, speed and convenience are essential.We provide you with the best service that promises delivery in under 10 minutes.</p>

                        </Col>
                    </Row>
                </div><br /><br />



                <div >
                        <Row className='me-3 ms-4'>
                            <Col >
                            <img src="https://www.menuspot.com.au/img/listings/cafe-hyderabad-taste-of-indian-food-taigum-29048.jpg" className='img-fluid' style={{width:'650px',height:'300px'}} alt="" />
                            </Col>
                            <Col >
                            <img src="https://www.nationsrestaurants.com/wp-content/uploads/2021/11/banner1.jpg" style={{width:'650px',height:'300px'}} className='img-fluid' alt="" />
                            </Col>
                        </Row>
                    </div><br /><br />


                <div className='mt-4 ms-4 ms-5'>
                    <span className='mt-5 mb-5 hs text-danger mb-5'>Top Picks </span> <span className='hd'>for you..</span>
                    
                    <Homefood />

                   
                        <Link to={'/userdashboard'}><span className='d-flex justify-content-center mt-4'> <Button variant="outline-danger" size='lg'  style={{ textAlign: 'center' }} >Explore More!</Button></span></Link>
                      


                </div><br /><br />

                <div className='mt-5  ms-5'>
                    <Row className='mt-5'>
                        <Col className='ms-5 mt-4' >
                            <img src="https://themes.coderthemes.com/yum_r/assets/testimonial-img--yJK1ugQ.png" className='img-fluid ms-5'  alt="" />
                        </Col>
                        <Col className='mt-4'>
                            <span className='hd'>Why choose <img src={logo} alt="" style={{ height: '60px', width: '160px' }} className='img-fluid' />?</span>


                            <p id='p2' className='text-dark'>We provide the best food with quality at your doorstep.The main aim is to deliver quality food in less time. <br /> <br />

                                <i className="fa-regular fa-circle-check fa-xl" style={{ color: '#ee2711' }}></i><span style={{ fontSize: '17px' }}> Fresh and tasty food</span><br /><br />
                                <i className="fa-regular fa-circle-check fa-xl" style={{ color: '#ee2711' }}></i><span style={{ fontSize: '17px' }}> Quality Support</span><br /><br />
                                <i className="fa-regular fa-circle-check fa-xl" style={{ color: '#ee2711' }}></i><span style={{ fontSize: '17px' }}> Order from any location</span><br /><br />
                                <i className="fa-regular fa-circle-check fa-xl" style={{ color: '#ee2711' }}></i><span style={{ fontSize: '17px' }}> Fastest Delivery</span>



                            </p>

                        </Col>

                    </Row><br /><br />


                   

                </div>



                              
                    </Container>

                    <ToastContainer/>
                </>
                )
}

                export default Home