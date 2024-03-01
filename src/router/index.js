import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
  } from "react-router-dom";
import UserLayOut from "../layout/UserLayOut";
import AdminLayOut from "../layout/AdminLayOut";
import AboutUS from "../component/aboutUS/AboutUS";
import ContactUs from "../component/contactUs/ContactUs";
import SmartPhones from "../component/user/SmartPhones";
import Accessories from "../component/user/Accessories";
import UserDetails from "../component/user/UserDetails";
import AuthLayout from "../layout/AuthLayOut";
import Login from "../component/auth/Login";
import SignUp from "../component/auth/SignUp";
import Category from "../component/category/Category";
import PageNotFound from "../component/PageNotFound";
import { lazy } from "react";
import Profile from "../component/user/profile/Profile";
const UserDashBoard = lazy(() => import("../component/user/DashBoard"));
const AdminDashBoard = lazy(() => import("../component/admin/DashBoard"));

  
  
  
  export const Routers = createBrowserRouter(
    createRoutesFromElements(
      <Route>
       <Route path="/" element={<UserLayOut />}>
        <Route index element={<UserDashBoard />} />
        <Route path="about-us" element={<AboutUS />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="smart-phones" element={<SmartPhones />} />
        <Route path="accessories" element={<Accessories/>} />
        <Route path="/category" element={<Category />}></Route>
        <Route path="user/profile" element={<Profile />} />
        

        <Route path="userdetail/:id" element={<UserDetails />} />
      </Route>
      <Route path="/admin" element={<AdminLayOut />}>
        <Route index element={<AdminDashBoard />} />
      </Route>
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Route>
      
      <Route path="*" element={<PageNotFound />}></Route>
        
      </Route>
    )
  );
  