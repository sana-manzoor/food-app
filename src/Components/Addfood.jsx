import React, { useState, useEffect } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { addFoodApi } from '../Services/allApis'
import { toast, ToastContainer } from 'react-toastify'
import { Link } from 'react-router-dom'

function Addfood() {

  const [foodDetails, setFoodDetails] = useState({
    title: "", price: "", category: "", description: "", image: "", userId: ""

  })

  const [token, setToken] = useState("")

  const [preview, setPreview] = useState("")


  useEffect(() => {
    const excistingUser = JSON.parse(localStorage.getItem("currentUser"))
    setFoodDetails({ ...foodDetails, userId: excistingUser._id })
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"))
    }
  }, [])

  useEffect(() => {
    if (foodDetails.image) {
      setPreview(URL.createObjectURL(foodDetails.image))
    }
  }, [foodDetails.image])

  




  const handleAddFood = async () => {
    // console.log("handle",projectDetails.title,projectDetails.image)
    if (!foodDetails.title || !foodDetails.price || !foodDetails.category || !foodDetails.description || !foodDetails.image || !foodDetails.userId) {
      toast.warning("Enter Valid Values")

    }
    else {
      // const {title,overview,languages,github,demo,userId,image}=projectDetails
      // console.log(projectDetails)
      const foodData = new FormData()
      foodData.append("title", foodDetails.title)
      foodData.append("price", foodDetails.price)
      foodData.append("category", foodDetails.category)
      foodData.append("description", foodDetails.description)
      foodData.append("food_image", foodDetails.image)
      foodData.append("userId", foodDetails.userId)

      // console.log(foodData)


      const reqHeader = {
        // "Content-Type":"multipart/form-data","Authorization":`Bearer ${token}`
        "Content-Type": "multipart/form-data", "Authorization": `Bearer ${token} `
      }
      console.log(reqHeader);
      const res = await addFoodApi(foodData, reqHeader)
      console.log(res);
      if (res.status === 200) {
        // setAddProjectResponse(res.data)
        toast.success("Food added successfully..!!")
        setFoodDetails({title:" ", price:" ", category:" ", description:" "})
        // navigate('/admindashboard')
      }
      else {
        toast.error("Project adding failed..!!")
      }


    }
  }


  // console.log(foodDetails)

  return (
    <>
      <Link to={'/admindashboard'} style={{ textDecoration: 'none' }} className='d-flex align-items-center m-3'>
        <i class="fa-solid fa-circle-arrow-left fa-2x" style={{ color: '#db3214' }}></i>
        <span className='btn text-center p-0 m-0 '></span>
      </Link>

      <div className='d-flex justify-content-center align-items-center container' style={{ width: '1000px' }}>
        <div className='container border shadow fw-bolder mt-5 mb-5'>

          <div className=' rounded '  >
            {/* style={{backgroundColor:'#F5E3E3'}}  */}

            <div className='d-flex justify-content-center mt-4 mb-3' >

              <h2 className='mt-4 head'>ADD ITEM</h2>
            </div><br /><br />

            <div className='row align-items-center'>
              <div className='col-lg-5'>
                <label htmlFor="food">
                  <input type="file" id='food' style={{ display: 'none' }} onChange={(e) => { setFoodDetails({ ...foodDetails, image: e.target.files[0] }) }} />
                  <img src={preview ? preview : "https://icon-library.com/images/upload-file-icon/upload-file-icon-7.jpg"} className='img-fluid m-4 ' style={{ width: '340px', height: '300px' }} alt="" />
                </label>
              </div>
              <div className='col-lg-7'>
                <div className='d-flex align-items-center flex-column'>


                  <form className='w-100  mt-4'>
                    <Form>

                      <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label style={{ fontSize: '16.5px', fontWeight: '400' }} column sm="2">
                          title:
                        </Form.Label>
                        <Col sm="10">
                          <Form.Control type="text" placeholder="Title" onChange={(e) => { setFoodDetails({ ...foodDetails, title: e.target.value }) }} />
                        </Col>
                      </Form.Group>

                      <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput2">
                        <Form.Label style={{ fontSize: '17px', fontWeight: '400' }} column sm="2">
                          Price:
                        </Form.Label>
                        <Col sm="10">
                          <Form.Control type="text" placeholder="Price" onChange={(e) => { setFoodDetails({ ...foodDetails, price: e.target.value }) }} />
                        </Col>
                      </Form.Group>

                      <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput3">
                        <Form.Label style={{ fontSize: '17px', fontWeight: '400' }} column sm="2">
                          Category:
                        </Form.Label>
                        <Col sm="10">
                          <Form.Control type="text" placeholder="Catgory" onChange={(e) => { setFoodDetails({ ...foodDetails, category: e.target.value }) }} />
                        </Col>
                      </Form.Group>

                      <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput4">
                        <Form.Label style={{ fontSize: '16.5px', fontWeight: '400' }} column sm="2">
                          Description:
                        </Form.Label>
                        <Col sm="10">
                          <Form.Control type="text" placeholder="Description" onChange={(e) => { setFoodDetails({ ...foodDetails, description: e.target.value }) }} />
                        </Col>
                      </Form.Group>
                    </Form>


                  </form><br />
                  <Button variant="outline-danger" className='btn btn-lg' style={{ textAlign: 'center' }} onClick={handleAddFood}>ADD</Button>




                </div>
              </div>
            </div>

          </div><br /><br /><br />
        </div>
        <ToastContainer />
      </div>
    </>
  )
}

export default Addfood