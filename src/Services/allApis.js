import { commonApi } from "./commonApi";
import { BASE_URL } from "./baseUrl";




//to register 
export const registerApi=async (data)=>{
    return await commonApi("POST",`${BASE_URL}/user/register`,data,"")
}

//to login
export const loginApi=async(data)=>{
    return await commonApi("POST",`${BASE_URL}/user/login`,data,"")


}

//to addfood
export const addFoodApi=async(data,headers)=>{
    return await commonApi("POST",`${BASE_URL}/admin/addfood`,data,headers)
}

//to display foodlist
export const adminFood=async(headers)=>{
    return await commonApi("GET",`${BASE_URL}/admin/foodlist`,"",headers)
}

//to display users
export const allusersList=async()=>{
    return await commonApi("GET",`${BASE_URL}/user/userslist`,"","")
}

//to display home food
export const homefood=async()=>{
    return await commonApi("GET",`${BASE_URL}/home/food`,'','')
}

//to display allfood
export const allFooditems=async(search)=>{
    return await commonApi("GET",`${BASE_URL}/user/food?search=${search}`,'','')
}

//to update food
export const editFoodApi=async(headers,data,id)=>{
    return await commonApi("PUT",`${BASE_URL}/admin/editFood/${id}`,data,headers)
}

//to delete food
export const deleteFoodApi=async(headers,id)=>{
    return await commonApi("DELETE",`${BASE_URL}/admin/deletefood/${id}`,{},headers)
}

//to delete users
export const deleteUserApi=async(headers,id)=>{
    return await commonApi("DELETE",`${BASE_URL}/admin/deleteuser/${id}`,{},headers)
}

//to add to cart 
export const addtoCart=async(data,headers)=>{
    return await commonApi("POST",`${BASE_URL}/user/addtocart`,data,headers)
}

//to get selCategory
export const selCategory=async(search)=>{
    return await commonApi("GET",`${BASE_URL}/admin/getcategory?search=${search}`,'','')
}






//to add to cart
export const addcart=async(data)=>{
    return await commonApi("POST",`${BASE_URL}/addcart`,data,'')
}

//to get cartlist
export const getcart=async(id)=>{
    return await commonApi("GET",`${BASE_URL}/cartlist/${id}`,'','')
}

 //to delete cartitem
 export const deletecartApi=async(id)=>{
    return await commonApi("DELETE",`${BASE_URL}/delcart/${id}`,{},'')
}

//to increase cart item
export const incrcart=async(id)=>{
    return await commonApi("GET",`${BASE_URL}/inccart/${id}`,'','')
}

//to decrease cart item
export const decrcart=async(id)=>{
    return await commonApi("GET",`${BASE_URL}/deccart/${id}`,'','')
}

//to add to orderslist
export const addorder=async(data)=>{
    return await commonApi("POST",`${BASE_URL}/addorder`,data,'')
}

//to get orderslist
export const orderlist=async()=>{
    return await commonApi("GET",`${BASE_URL}/orderlist`,'','')
}

//to remove cart
export const deletecart=async(id)=>{
    return await commonApi("DELETE",`${BASE_URL}/cartdel/${id}`,{},'')
}



