import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MapsHomeWorkOutlinedIcon from '@mui/icons-material/MapsHomeWorkOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import KeyboardCommandKeyOutlinedIcon from '@mui/icons-material/KeyboardCommandKeyOutlined';
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';

const drawerWidth = 260;

export default function SideMenu() {
  const hanldeNavigation = useNavigate();
  //const location = useLocation();
  const iconColor = 'primary'

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
            <ListItem 
                key={'Home'} 
                disablePadding
                onClick ={() => hanldeNavigation('/home')}
                sx={{backgroundColor: '#99ddff'}}
                >
                <ListItemButton>
                    <ListItemIcon>
                        <HomeOutlinedIcon color={iconColor}/>
                    </ListItemIcon>
                    <ListItemText primary={'Home'} />
                </ListItemButton>
            </ListItem>
            <ListItem 
                key={'registration'} 
                disablePadding
                onClick ={() => hanldeNavigation('/registration')}
                >
                <ListItemButton>
                    <ListItemIcon>
                        <PersonAddAltOutlinedIcon color={iconColor}/>
                    </ListItemIcon>
                    <ListItemText primary={'Registration'} />
                </ListItemButton>
            </ListItem>
            <ListItem 
                key={'national-awards'} 
                disablePadding
                onClick ={() => hanldeNavigation('/nta')}
                >
                <ListItemButton>
                    <ListItemIcon>
                        <EmojiEventsOutlinedIcon color={iconColor}/>
                    </ListItemIcon>
                    <ListItemText primary={'National Awards'} />
                </ListItemButton>
            </ListItem>
            <ListItem 
                key={'Results'} 
                disablePadding
                onClick ={() => hanldeNavigation('/result')}
                >
                <ListItemButton>
                    <ListItemIcon>
                        <DescriptionOutlinedIcon color={iconColor}/>
                    </ListItemIcon>
                    <ListItemText primary={'Results'} />
                </ListItemButton>
            </ListItem>
            <ListItem 
                key={'classes'} 
                disablePadding
                onClick ={() => hanldeNavigation("/classes")}
                >
                <ListItemButton>
                    <ListItemIcon>
                        <GroupsOutlinedIcon color={iconColor}/>
                    </ListItemIcon>
                    <ListItemText primary={'Classes'} />
                </ListItemButton>
            </ListItem>
            <ListItem 
                key={'Course'} 
                disablePadding
                onClick ={() => hanldeNavigation('/courses')}
                >
                <ListItemButton>
                    <ListItemIcon>
                        <LocalLibraryOutlinedIcon color={iconColor}/>
                    </ListItemIcon>
                    <ListItemText primary={'Courses'} />
                </ListItemButton>
            </ListItem>
            <ListItem 
                key={'Department'} 
                disablePadding
                onClick ={() => hanldeNavigation('/departments')}
                >
                <ListItemButton>
                    <ListItemIcon>
                        <MapsHomeWorkOutlinedIcon color={iconColor}/>
                    </ListItemIcon>
                    <ListItemText primary={'Departments'} />
                </ListItemButton>
            </ListItem>
            <ListItem 
                key={'modules'} 
                disablePadding
                onClick ={() => hanldeNavigation('/modules')}
                >
                <ListItemButton>
                    <ListItemIcon>
                        <MenuBookOutlinedIcon color={iconColor}/>
                    </ListItemIcon>
                    <ListItemText primary={'Modules'} />
                </ListItemButton>
            </ListItem>
            <ListItem 
                key={'students'} 
                disablePadding
                onClick ={() => hanldeNavigation('/student')}
                >
                <ListItemButton>
                    <ListItemIcon>
                        <Diversity3OutlinedIcon color={iconColor}/>
                    </ListItemIcon>
                    <ListItemText primary={'Students'} />
                </ListItemButton>
            </ListItem>
             <ListItem 
                key={'entryCategory'} 
                disablePadding
                onClick ={() => hanldeNavigation('/category')}
                >
                <ListItemButton>
                    <ListItemIcon>
                        <FactCheckOutlinedIcon color={iconColor}/>
                    </ListItemIcon>
                    <ListItemText primary={'Entry Category'} />
                </ListItemButton>
            </ListItem>
            <ListItem 
                key={'staff'} 
                disablePadding
                onClick ={() => hanldeNavigation('/staff')}
                >
                <ListItemButton>
                    <ListItemIcon>
                        <PeopleAltOutlinedIcon color={iconColor}/>
                    </ListItemIcon>
                    <ListItemText primary={'Staff'} />
                </ListItemButton>
            </ListItem>
            <ListItem 
                key={'role'} 
                disablePadding
                onClick ={() => hanldeNavigation('/role')}
                >
                <ListItemButton>
                    <ListItemIcon>
                        <KeyboardCommandKeyOutlinedIcon color={iconColor}/>
                    </ListItemIcon>
                    <ListItemText primary={'Roles'} />
                </ListItemButton>
            </ListItem>
             <ListItem 
                key={'users'} 
                disablePadding
                onClick ={() => hanldeNavigation('/user')}
                >
                <ListItemButton>
                    <ListItemIcon>
                        <SupervisorAccountOutlinedIcon color={iconColor}/>
                    </ListItemIcon>
                    <ListItemText primary={'Users'} />
                </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
  );
}
