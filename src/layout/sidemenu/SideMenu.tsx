import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import AdminMenu from './AdminMenu';
import StudentMenu from './StudentMenu';
import LecturerMenu from './LecturerMenu';
import DefaultMenu from './DefaultMenu';
import { useEffect, useState } from 'react';

const drawerWidth = 260;

let roleMenu:JSX.Element = <DefaultMenu />

export default function SideMenu() {
    const [specificRoleMenu, setSpecificRoleMenu] = useState(roleMenu);
    const getRole = () => {
        let role = localStorage.getItem("role0")
       
        switch(role){
            case "ADMIN" :
                roleMenu = <AdminMenu />
                break;
            case "STUDENT":
                roleMenu = <StudentMenu />
                break;
            case "LECTURER":
                roleMenu = <LecturerMenu />
                break;
            default:
                roleMenu = <DefaultMenu />

        }

        setSpecificRoleMenu(roleMenu);
    }

    useEffect(() => {
        getRole();
    }, []);

  return (
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto', py:2 }}>
          <List>
            { specificRoleMenu }
          </List>
        </Box>
      </Drawer>
  );
}
