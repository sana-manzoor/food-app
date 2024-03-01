import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../Assets/l4.jpg'
import './footer.css'

function Footer() {
  return (
    <div className='mt-4'>
    <div style={{height:'320px',width:'100%',backgroundColor:'#9C0906',color:'white', overflowY:'hidden'}}>
    <Row className='p-5'>
      <Col md='3'>
      <div className='text-center text-light head'  style={{overflowY:'hidden'}}>FOODHUB</div><br />
      <p style={{textAlign:'center',color:'white'}}>© 2023 Bundle Technologies Pvt. Ltd</p>

      </Col>
      <Col md='3' className='d-flex flex-column text-center'>
        <h3  style={{overflowY:'hidden',color:'white'}}>Links</h3>
        <Link to={'./'} style={{textDecoration:'none',color:'white'}} className='pt-2 pb-2'>Home</Link>
        <Link to={'./Login'} style={{textDecoration:'none',color:'white'}}className='pt-2 pb-2'>Login</Link>
        <Link to={'./Register'} style={{textDecoration:'none',color:'white'}} className='pt-2 pb-2'>Register</Link>
        <Link to={'./Userdashboard'} style={{textDecoration:'none',color:'white'}} className='pt-2 pb-2'>Userdashboard</Link>
        {/* <Link to={'./Projects'} style={{textDecoration:'none',color:'white'}} className='pt-2 pb-2'>Projects</Link> */}



      </Col>
      <Col md='3' className='d-flex flex-column text-center'>
        <h3  style={{overflowY:'hidden',color:'white'}}>Company</h3>
        <Link to={'https://bhjs'} style={{textDecoration:'none',color:'white'}} className='pt-3 pb-2'>About</Link>
        <Link to={'https://AJJK'} style={{textDecoration:'none',color:'white'}}className='pt-3 pb-2'>Career</Link>
        <Link to={'https://jsmns'} style={{textDecoration:'none',color:'white'}} className='pt-3 pb-2'>Team</Link>
        <Link to={'https://kkajan'} style={{textDecoration:'none',color:'white'}} className='pt-3 pb-2'>Terms and Conditions</Link>


      </Col>

      <Col md='3' className='d-flex flex-column text-center'>
        <h3  style={{overflowY:'hidden',color:'white'}}>Contact Us</h3>
        <Link to={'https://react.dev/'} style={{textDecoration:'none',color:'white'}} className='pt-3 pb-2'>foodhub@gmail.com</Link>
        <Link to={'https://react-bootstrap.github.io/'} style={{textDecoration:'none',color:'white'}}className='pt-3 pb-2'>Help and Support</Link>
        <Link to={'https://fontawesome.com/'} style={{textDecoration:'none',color:'white'}} className='pt-3 pb-2'>Partner with Us</Link>

      </Col>
    <div>
      <br /><br />
     <p className='text-center' style={{color:'white'}}>Copyright © 2023 FOODHUB. Built with ZELAB.</p> 
  </div>
    </Row>
    </div>
  </div>
    )
}

export default Footer