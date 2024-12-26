import React, { useState, useEffect,useContext } from 'react'
import { Table,Button } from 'react-bootstrap'
import Editfood from './Editfood'
import { adminFood } from '../Services/allApis'
import { Link } from 'react-router-dom'
import { editFoodResponseContext } from '../Context/ContextShare'
import {  toast} from 'react-toastify'
import { deleteFoodApi } from '../Services/allApis'

function Foodlist() {

    

    const [token, setToken] = useState("")

    const [foodItems, setFoodItems] = useState([])
    const [isOpen, setIsOpen] = React.useState(true);

    const {editFoodResponse,setEditFoodResponse}=useContext(editFoodResponseContext)


    useEffect(() => {

        if (localStorage.getItem("token")) {
            setToken(localStorage.getItem("token"))
        }
    }, [])

    useEffect(() => {
        if (token) {
            getFoodlist()
        }
    }, [token,editFoodResponse])

    const handledelete=async(id)=>{
        const reqHeader={
          "Content-Type":"application/json","Authorization":`Bearer ${token}`
        }
        const result=await deleteFoodApi(reqHeader,id)
        if(result.status ===200){
          toast.success("Project deletion successfull!!")
          getFoodlist()
        }
        else{
          toast.error("Project deletion failed!!")
        }
      }



    const getFoodlist = async () => {
        const reqHeader = {
            "Content-Type": "application/json", "Authorization": `Bearer ${token}`
        }
        // console.log(reqHeader)
        const result = await adminFood(reqHeader)
        console.log(result)
        if (result.status === 200) {
            console.log(result.data)
            setFoodItems(result.data)
            console.log(foodItems)
        }
        else {
            setFoodItems([])
        }
    }

    return isOpen? (
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
                            <h2 className='head'>Items List</h2>
                        </div><br /><br />
                        <Table striped responsive bordered hover className='container text-center shadow'>
                            <thead className='head2'>

                                <tr className='text-center lead'>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Category</th>
                                    <th>Edit</th>
                                </tr>
                            </thead>
                            <tbody>

                                {

                                    foodItems.map(item => (
                                        <tr className='lead font-weight-normal'>

                                            <td>{item.title}</td>
                                            <td>{item.price}</td>
                                            <td>{item.category}</td>
                                            <td><i className="fa-solid fa-trash fa-lg me-3"  onClick={()=>{handledelete(item._id)}} style={{ color: '#db1414' }}></i><Editfood food={item} /></td>

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
            </div>



        </>
    ):null;
}

export default Foodlist