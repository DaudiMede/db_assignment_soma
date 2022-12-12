import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';

const drawerWidth = 260;

export default function LecturerMenu() {
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
          </List>
        </Box>
      </Drawer>
  );
}
