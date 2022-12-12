import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { useNavigate } from 'react-router';

const StudentMenu = () => {
    const iconColor = "primary";
    const hanldeNavigation = useNavigate();
    return(
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
        </List>
    );
}

export default StudentMenu;