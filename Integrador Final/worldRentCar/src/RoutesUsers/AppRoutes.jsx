import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes,    
  } from "react-router-dom";
import Categories from "./Categories";
import ContacUs from "./ContactUs";
import Gallery from "./Gallery";
import Home from "./Home";
import LogIn from "./LogIn"
import MyReservation from "./MyReservation";
import Payment from "./Payment"
import RegistrationForm from "./RegistrationForm"
import Rent from "./Rent"
import AddVehicle from "../RoutesAdmin/AddVehicle";
import EditVehicle from "../RoutesAdmin/EditVehicle"
import Header from "../Utils/Header";
import Footer from "../Utils/Footer"

  function AppRoutes(){
    return (
        <Router>
          
          <div>
            <Header/>
            <Routes>
              <Route path='/login' element={<LogIn/>}></Route>
              <Route path='/categories' element={<Categories/>}></Route>
              <Route path='/contact' element={<ContacUs/>}></Route>
              <Route path='/gallery' element={<Gallery/>}></Route>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/myreservation' element={<MyReservation/>}></Route>
              <Route path='/payment' element={<Payment/>}></Route>
              <Route path='/registration' element={<RegistrationForm/>}></Route>
              <Route path='/rent' element={<Rent/>}></Route>
              <Route path='/edit' element={<EditVehicle/>}></Route>
              <Route path='/add' element={<AddVehicle/>}></Route>
            </Routes>      
          <Footer/>
          </div>
          
        </Router>
    )
    
  }

  export default AppRoutes;