import React from 'react'
import Header from './Header'
import './categ.css'
import { useLocation } from 'react-router'
import { Card, Button } from 'react-bootstrap'
import { BASE_URL } from '../Services/baseUrl'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'

function Categ() {
    const location = useLocation()
    const data = location.state.newcat
    console.log(data)

    return (
        <>
            <Header />
{/* 
            <Link to={'/'} style={{ textDecoration: 'none' }} className='d-flex align-items-center m-3'>
                <i className="fa-solid fa-circle-arrow-left fa-2x" style={{ color: '#db3214' }}></i>
                <span className='btn text-center p-0 m-0 '></span>
            </Link> */}

            {/* Render category title and description only once */}
            {data?.length > 0 && (
                <div className='m-5'>
                    <div className='display-5 fw-bolder c1'>{data[0].category}</div>
                    <div className='hd2 mt-2'>
                        Taste these delectable classics, delectables <span className='c2'>{data[0].category}</span> to make your day.
                    </div>
                </div>
            )}

            {/* Render food items */}
            <Row>
                {data?.map((item) => (
                    <Col className='m-5' key={item._id}>
                        <Card style={{ width: '17rem' }} className='border shadow mt-3'>
                            <Card.Img
                                variant="top"
                                src={`${BASE_URL}/upload/${item.food_image}`}
                                className='img-fluid'
                                style={{ height: '180px' }}
                            />
                            <Card.Body>
                                <Card.Title className='text-center te1'>{item.title}</Card.Title>
                                <Card.Text className='text-center te2'>Price: ₹{item.price}</Card.Text>
                                <Button
                                    variant="outline-danger"
                                    size='lg'
                                    className='w-100'
                                    style={{ textAlign: 'center' }}
                                >
                                    <i className="fa-solid fa-cart-plus" style={{ color: '#d5271a' }}></i> Cart
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Categ
