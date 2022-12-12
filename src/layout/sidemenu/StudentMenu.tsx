import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import { useNavigate } from "react-router";

const StudentMenu = () => {
    const iconColor = "primary";
    const navigateTo = useNavigate();

    return(
        <List>
             <ListItem 
                key={'Home'} 
                disablePadding
                onClick ={() => navigateTo('/home')}
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
                key={'modules'} 
                disablePadding
                onClick ={() => navigateTo('/modules')}
                >
                <ListItemButton>
                    <ListItemIcon>
                        <MenuBookOutlinedIcon color={iconColor}/>
                    </ListItemIcon>
                    <ListItemText primary={'Modules'} />
                </ListItemButton>
            </ListItem>
             <ListItem 
                key={'Results'} 
                disablePadding
                onClick ={() => navigateTo('/result')}
                >
                <ListItemButton>
                    <ListItemIcon>
                        <DescriptionOutlinedIcon color={iconColor}/>
                    </ListItemIcon>
                    <ListItemText primary={'Results'} />
                </ListItemButton>
            </ListItem>
        </List>
    );
}

export default StudentMenu;