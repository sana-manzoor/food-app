import React, { useState, useEffect } from 'react'
import { Table,Button } from 'react-bootstrap'
import { allusersList, deleteUserApi } from '../Services/allApis'
import { ToastContainer,toast } from 'react-toastify'


function Userslist() {

    const [usersList, setUsersList] = useState([])

    const [token, setToken] = useState("")

    const [isOpen, setIsOpen] = React.useState(true);

    useEffect(() => {

        getuserslist()

    }, [])






    useEffect(() => {

        if (localStorage.getItem("token")) {
            setToken(localStorage.getItem("token"))
        }
    }, [])

    useEffect(() => {
        if (token) {
            getuserslist()
        }
    }, [token])

    const handledelete=async(id)=>{
        const reqHeader={
          "Content-Type":"application/json","Authorization":`Bearer ${token}`
        }
        const result=await deleteUserApi(reqHeader,id)
        if(result.status ===200){
          toast.success("Project deletion successfull!!")
          getuserslist()
        }
        else{
          toast.error("Project deletion failed!!")
        }
      }



    const getuserslist = async () => {
        // const reqHeader = {
        //     "Content-Type": "application/json", "Authorization": `Bearer ${token}`
        // }
        // console.log(reqHeader)
        const result = await allusersList()
        console.log(result)
        if (result.status === 200) {
            console.log(result.data)
            setUsersList(result.data)
            console.log(usersList)
        }
        else {
            setUsersList([])
        }
    }

    return isOpen?  (
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
                            <h2 className='head'>Users List</h2>
                        </div><br /><br />
                        <Table striped bordered hover shadow className='container text-center ' >
                            <thead >
                                <tr className='text-center lead head2'>
                                    <th>UserId</th>
                                    <th>Name</th>
                                    <th>E-mail</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    usersList.map(item => (
                                        <tr className='lead font-weight-normal'>
                                            <td>{item._id}</td>
                                            <td>{item.username}</td>
                                            <td>{item.email}</td>
                                            <td><i className="fa-solid fa-trash fa-lg" onClick={()=>{handledelete(item._id)}} style={{ color: '#db1414' }}></i></td>
                                        </tr>

                                    ))
                                }

                                    
                            </tbody>
                        </Table>
                        <div className='text-end mt-5 me-4' >
                            <Button variant="outline-danger" size='lg'  onClick={() => setIsOpen(false)}>Close </Button>
                            
                            
                            </div>

                    </div><br /><br /><br />
                </div>
                 <ToastContainer/> 
            </div>
        </>
    ):null;
}

export default Userslist