//import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
// import './App.css';
// import 'bootstrap/dist/css,bootstrap.min.css'
import Home from "./home";
import StudentHome from "./modules/student/studentHome";
import CreateStudent from "./modules/student/createStudent";
import UpdateStudent from "./modules/student/updateStudent";
import InstructorHome from "./modules/instructor/instructorHome";
import CreateInstructor from "./modules/instructor/createInstructor";
import UpdateInstructor from "./modules/instructor/updateInstructor";
import CourseHome from "./modules/course/courseHome";
import CreateCourse from "./modules/course/createCourse";
import UpdateCourse from "./modules/course/updateCourse";
import AnnouncementHome from "./modules/announcement/announcementHome";
import CreateAnnouncement from "./modules/announcement/createAnnouncement";
import UpdateAnnouncement from "./modules/announcement/updateAnnouncement";
import PaymentStatusHome from "./modules/paymentStatus/paymentStatusHome";
import CreatePaymentStatus from "./modules/paymentStatus/createPaymentStatus";
import UpdatePaymentStatus from "./modules/paymentStatus/updatePaymentStatus";
import StudentHomePage from "./modules/student/studentHomePage";
import ViewCourses from "./modules/course/viewCourses";
import ViewAnnouncements from "./modules/announcement/viewAnnouncements";
import InstructorHomePage from "./modules/instructor/instructorHomePage";
import AdminHomePage from "./modules/admin/adminHomePage";
import StudentLogin from "./modules/student/studentLogin";
import InstructorLogin from "./modules/instructor/instructorLogin";
import AdminLogin from "./modules/admin/adminLogin";
import FrontPage from "./frontpage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<FrontPage />}></Route>

          <Route path='/home' element={<Home />}></Route>

          <Route path='/student' element={<StudentHome />}></Route>
          <Route path='/student/create' element={<CreateStudent />}></Route>
          <Route path='/student/update/:id' element={<UpdateStudent />}></Route>
          <Route path='/student/homepage' element={<StudentHomePage />}></Route>
          <Route path='/student/login' element={<StudentLogin />}></Route>


          <Route path='/instructor' element={<InstructorHome />}></Route>
          <Route path='/instructor/create' element={<CreateInstructor />}></Route>
          <Route path='/instructor/update/:id' element={<UpdateInstructor/>}></Route>
          <Route path='/instructor/homepage' element={<InstructorHomePage />}></Route>
          <Route path='/instructor/login' element={<InstructorLogin />}></Route>



          <Route path='/course' element={<CourseHome />}></Route>
          <Route path='/course/create' element={<CreateCourse />}></Route>
          <Route path='/course/update/:id' element={<UpdateCourse/>}></Route>
          <Route path='/course/view' element={<ViewCourses />}></Route>


          <Route path='/announcement' element={<AnnouncementHome />}></Route>
          <Route path='/announcement/create' element={<CreateAnnouncement />}></Route>
          <Route path='/announcement/update/:id' element={<UpdateAnnouncement/>}></Route>
          <Route path='/announcement/view' element={<ViewAnnouncements />}></Route>


          <Route path='/paymentStatus' element={<PaymentStatusHome />}></Route>
          <Route path='/paymentStatus/create' element={<CreatePaymentStatus />}></Route>
          <Route path='/paymentStatus/update/:id' element={<UpdatePaymentStatus/>}></Route>

          <Route path='/admin/homepage' element={<AdminHomePage />}></Route>
          <Route path='/admin/login' element={<AdminLogin />}></Route>



        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
