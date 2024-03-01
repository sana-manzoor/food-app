import React,{useState,useEffect,useContext} from 'react'
import { Modal,Button ,Form,Row,Col} from 'react-bootstrap'
import { BASE_URL } from '../Services/baseUrl';
import { toast,ToastContainer } from 'react-toastify';
import { editFoodApi } from '../Services/allApis';
import { editFoodResponseContext } from '../Context/ContextShare';


function Editfood({food}) {

    const [show, setShow] = useState(false);

    const handleClose = () =>{
      setShow(false);
      setPreview("")
    } 
    const handleShow = () => setShow(true);

    const [token, setToken] = useState("")

    const [preview, setPreview] = useState("")

    const {editFoodResponse,setEditFoodResponse}=useContext(editFoodResponseContext)



    

  const [editData, setEditData] = useState({
    title: food.title, price: food.price, category: food.category, description: food.description, image: food.food_image

  })

  useEffect(() => {
    const excistingUser = JSON.parse(localStorage.getItem("currentUser"))
    setEditData({ ...editData, userId: excistingUser._id })
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"))
    }
  }, [])


  useEffect(() => {
    if (editData.image != food.food_image) {
      setPreview(URL.createObjectURL(editData.image))
    }
  }, [editData.image])

  const handleUpdatedEditdata = async () => {
    if (!editData.title || !editData.price || !editData.category || !editData.description || !editData.image) {
      toast.warning("Enter Valid Values!!")

    }
    else {

      console.log("Valid")
      const foodData = new FormData()
      foodData.append("title", editData.title)
      foodData.append("price", editData.price)
      foodData.append("category", editData.category)
      foodData.append("description", editData.description)
      foodData.append("userId", editData.userId)
      foodData.append("food_image", editData.image)
      if(editData.image == food.food_image){
        const reqHeader={
          "Content-Type": "application/json", "Authorization": `Bearer ${token} `
        }
        const res=await  editFoodApi(reqHeader,foodData,food._id)
        if(res.status==200){
         setEditFoodResponse(res.data)
          toast.success("Food item Updated Successfully!!")
          handleClose()
        }
        else{
          toast.error(res.response.data)
        }
      }
      else {
        const reqHeader={
          "Content-Type": "multipart/form-data", "Authorization": `Bearer ${token} `
        }
        const res=await editFoodApi(reqHeader,foodData,food._id)
        if(res.status==200){
        setEditFoodResponse(res.data)
          toast.success("Food item Updated Successfully!!")
           handleClose()
        }
        else{
          toast.error(res.response.data)
        }
     }

      // console.log(editData)

     
   }

  }

  return (
   <>
   <i className="fa-regular fa-pen-to-square fa-lg" onClick={handleShow} style={{ color: '#db1414' }}></i>

   <Modal className='modal-lg'
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header >
                    <Modal.Title>Edit Item</Modal.Title>
                </Modal.Header>
                <Modal.Body>
               
                <div className='row align-items-center'>
              <div className='col-lg-4'>
                <label htmlFor="food">
                  <input type="file" id='food' style={{ display: 'none' }} onChange={(e) => setEditData({ ...editData, image: e.target.files[0] })}/>
                  <img src={preview ? preview : `${BASE_URL}/upload/${food.food_image}`} className='img-fluid m-4' alt="" />
                </label>
              </div>
              <div className='col-lg-8'>
                <div className='d-flex align-items-center flex-column'>


                  <form className='w-100  mt-4'>
                    <Form>

                      <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label style={{ fontSize: '16.5px', fontWeight: '400' }} column sm="2">
                          Name:
                        </Form.Label>
                        <Col sm="10">
                          <Form.Control type="text" placeholder="Name" defaultValue={food.title} onChange={(e) => setEditData({ ...editData, title: e.target.value })}  />
                        </Col>
                      </Form.Group>

                      <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput2">
                        <Form.Label style={{ fontSize: '17px', fontWeight: '400' }} column sm="2">
                          Price:
                        </Form.Label>
                        <Col sm="10">
                          <Form.Control type="text" placeholder="Price" defaultValue={food.price} onChange={(e) => setEditData({ ...editData, price: e.target.value })}  />
                        </Col>
                      </Form.Group>

                      <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput3">
                        <Form.Label style={{ fontSize: '17px', fontWeight: '400' }} column sm="2">
                          Category:
                        </Form.Label>
                        <Col sm="10">
                          <Form.Control type="text" placeholder="Category" defaultValue={food.category} onChange={(e) => setEditData({ ...editData, category: e.target.value })}  />
                        </Col>
                      </Form.Group>

                      <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput4">
                        <Form.Label style={{ fontSize: '16.5px', fontWeight: '400' }} column sm="2">
                          Description:
                        </Form.Label>
                        <Col sm="10">
                          <Form.Control type="text" placeholder="Description" defaultValue={food.description} onChange={(e) => setEditData({ ...editData, description: e.target.value })}  />
                        </Col>
                      </Form.Group>
                    </Form>


                  </form><br />




                </div>
              </div>
            </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-danger" className='btn btn-lg' style={{ textAlign: 'center' }} onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="outline-danger" className='btn btn-lg' style={{ textAlign: 'center' }} onClick={handleUpdatedEditdata} >Update</Button>

                </Modal.Footer>
            </Modal>
             {/* <ToastContainer/>  */}
   </>
  )
}

export default Editfood