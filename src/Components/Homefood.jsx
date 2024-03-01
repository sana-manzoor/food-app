import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Foodcard from './Foodcard'
import { homefood } from '../Services/allApis'
import { Card } from 'react-bootstrap'
import { BASE_URL } from '../Services/baseUrl'
import { Link } from 'react-router-dom'

function Homefood() {

    const [hFood, setHFood] = useState([])


    useEffect(() => {

        getHomeFoods()

    }, [])


    const getHomeFoods = async () => {
        const res = await homefood()
        if (res.status === 200) {
            setHFood(res.data)
        }
        else {
            console.log(res.response.data)
        }
    }

    // console.log(hFood)



    return (
        <div>
            <Row>

                {
                    hFood.map((item) => (
                        <Col className='m-2'>
                          <Link to={'/userdashboard'} > <Card style={{ width: '17rem' }}  className='border  shadow mt-3'>
                                <Card.Img variant="top" src={`${BASE_URL}/upload/${item.food_image}`} className='img-fluid' style={{ height: '180px' }} />
                                <Card.Body>
                                    <Card.Title className='text-center te1'>{item.title} </Card.Title>
                                   
                                    


                                </Card.Body>
                            </Card>
                            </Link>
                        </Col>
                    ))
                }



            </Row>
        </div>
    )
}

export default Homefood