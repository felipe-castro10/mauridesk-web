import {Routes, Route} from "react-router";
import SignIn from "../pages/SignIn/SignIn";
import { Home } from "../pages/Home/Home";
import { ViewTicket } from "../pages/ViewTicket/ViewTicket";
import { CreateTicket } from "../pages/CreateTicket/CreateTicket";



export function AuthRoutes(){
  return (
    <Routes>
      <Route path="/" element={<SignIn/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/viewTicket/:id" element={<ViewTicket/>}/>
      <Route path="/create" element={<CreateTicket/>}/>
    </Routes>
  )
}