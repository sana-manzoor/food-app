import React, { useState } from 'react'
import { Table , Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { deleteUserApi } from '../Services/allApis'


function Orderlist() {
    const [isOpen, setIsOpen] = React.useState(true);



    return isOpen ? (
        <>
            {/* <Link to={'/admindashboard'} style={{ textDecoration: 'none' }} className='d-flex align-items-center m-3'>
                <i class="fa-solid fa-circle-arrow-left fa-2x" style={{ color: '#db3214' }}></i>
                <span className='btn text-center p-0 m-0 '></span>
            </Link> */}
            <div className='d-flex justify-content-center align-items-center container' style={{ width: '1000px' }}>
                <div className='container border shadow fw-bolder mt-5 mb-5'>

                    <div className=' rounded '  >
                        {/* style={{backgroundColor:'#F5E3E3'}}  */}

                        <div className='d-flex justify-content-center mt-4 mb-3' >
                            <h2 className='head'>Orders List</h2>
                        </div><br /><br />
                        <Table striped bordered hover className='container text-center'>
                            <thead className='head2'>
                                <tr className='text-center lead'>
                                    <th>Id</th>
                                    <th>Email</th>
                                    <th>UserId</th>
                                    <th>Amount</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='lead font-weight-normal'>

                                    <td>1</td>
                                    <td>sana@gmail.com</td>
                                    <td>871910</td>
                                    <td>rs400</td>
                                    <td>27-08-2024</td>
                                </tr>
                                <tr className='lead font-weight-normal'>
                                    <td>2</td>
                                    <td>sana@gmail.com</td>
                                    <td>871910</td>
                                    <td>rs400</td>
                                    <td>27-08-2024</td>
                                </tr>
                               
                            </tbody>
                        </Table>

                        <div className='text-end mt-5 me-4' >
                            <Button variant="outline-danger" size='lg'  onClick={() => setIsOpen(false)}>Close </Button>


                        </div>


                    </div><br /><br /><br />
                </div>
                {/* <ToastContainer/>  */}
            </div>

        </>
    ) : null;
}

export default Orderlist