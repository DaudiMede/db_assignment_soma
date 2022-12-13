import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import SideMenu from '../sidemenu/SideMenu';
import TopBar from '../appbar/AppBarTop';
import StudentHome from "../../pages/dashboard/StudentHome";
import Department from '../../pages/department/pages/Departments';
import Courses from '../../pages/courses/pages/Courses';
import Modules from '../../pages/modules/pages/Modules';
import Classes from '../../pages/classes/pages/Classes';
import UserProfile from '../../pages/users/pages/Profile';
import DepartmentDetails from '../../pages/department/pages/DepartmentDetails';
import Application from '../../pages/registration/pages/Application';
import Students from '../../pages/student/Students';
import EntryCategoryPage from '../../pages/entry-category/pages/EntryCategoryPage';
import NationalAwards from '../../pages/national-award/pages/NationalAwards';
import SignIn from '../../pages/authentication/signin/pages/SignIn';
import Roles from '../../pages/role/pages/Roles';
import StaffPage from '../../pages/staff/pages/StaffPage';
import ResultPage from '../../pages/examination/Result';
import Applications from '../../pages/registration/pages/Applications';
import Users from '../../pages/users/pages/Users';
import BasicTable from '../../components/table/CustomTableWithCells';

type wrapperProps = {
  isUserAuthenticated:boolean;
}

const Wrapper = (props:wrapperProps) => {
    
  return (
    <BrowserRouter>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {props.isUserAuthenticated ? <TopBar /> : null}
      { props.isUserAuthenticated ? <SideMenu /> : null }
      <Box component="main" sx={{ flexGrow: 1, p:3 }}>
        { props.isUserAuthenticated ? <Toolbar /> : null }
       <Routes>
           <Route path="/" element={<SignIn />}/>
           <Route path="/home" element={<BasicTable />}/>
           <Route path="/departments" element={<Department />}/>
           <Route path="/courses" element={<Courses />}/>
           <Route path="/modules" element={<Modules />}/>
           <Route path="/classes" element={<Classes />}/>
           <Route path="/profile" element={<UserProfile />}/>
           <Route path="/department/1" element={<DepartmentDetails />}/>
           <Route path="/student/application" element={<Application />}/>
           <Route path="/result" element={<ResultPage />}/>
           <Route path="/student" element={<Students />}/>
           <Route path="/category" element={<EntryCategoryPage />}/>
           <Route path="/nta" element={<NationalAwards />}/>
           <Route path="/role" element={<Roles />}/>
           <Route path="/staff" element={<StaffPage />}/>
          <Route path="/registration" element={<Applications />}/>
          <Route path="/user" element={<Users />}/>
       </Routes>
      </Box>
    </Box>
    </BrowserRouter>
  );
}

export default Wrapper;
