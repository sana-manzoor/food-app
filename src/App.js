import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Userdashboard from './Pages/Userdashboard';
import Admindashboard from './Pages/Admindashboard';
import Auth from './Components/Auth';
import Footer from './Components/Footer';
import Userslist from './Components/Userslist';
import Addfood from './Components/Addfood';
import Orderlist from './Components/Orderlist';
import Foodlist from './Components/Foodlist';
import Cart from './Components/Cart';
import Categ from './Components/Categ';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Checkout from './Components/Checkout';
import Payment from './Components/Payment';
import Success from './Components/Success';





function App() {
  return (
    <div className="App">
 <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Login' element={<Auth/>} />
        <Route path='/Register' element={<Auth register />} />
        <Route path='/Userdashboard' element={<Userdashboard />} />
        <Route path='/Admindashboard' element={<Admindashboard/>} />
        <Route path="/userslist" element={<Userslist/>}/>
       <Route path="/foodlist" element={<Foodlist/>}/>
        <Route path="/addfood" element={<Addfood/>}/>
        <Route path="/orderlist" element={<Orderlist/>}/>
        <Route path="/cart" element={<Cart/>}/> 
         <Route path="/category" element={<Categ/>}/>  
         <Route path="/pay" element={<Payment/>}/> 
         <Route path='/success' element={<Success/>} />

 
       



      </Routes>
      <Footer/>
      <ToastContainer/>
    </div>
   
  );
}

export default App;
