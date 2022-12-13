import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import { Logout } from '@mui/icons-material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import { useNavigate } from 'react-router';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import { useAppDispatch } from '../../store/hooks';
import { setAuthenticated } from '../../store/slices/AuthSlice';
import LocalStorageManager from '../../models/LocalStorageManager';

const TopBar = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <AppBar
        color="primary"
        elevation={0}   
        position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
    <Toolbar>
    <Typography
        variant="h5"
        noWrap
        component="div"
        sx={{ display: { xs: 'none', sm: 'block'}}}
      >
        {/* SOMA */}
      </Typography>
    <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="Open Drawer"
        sx={{ ml: 3 }}
      >
        <MenuIcon />
      </IconButton>
      <Box sx={{ flexGrow: 1 }} />
      <IconButton
          size="large"
          edge="end"
          aria-label="User Account"
          aria-haspopup="true"
          color="inherit"
          sx={{ px: 2 }}
          onClick={ () => navigate('/profile') }
        >
          <Tooltip title='User Profile'>
            <ManageAccountsOutlinedIcon />
          </Tooltip>
      </IconButton>
      <IconButton
          size="large"
          edge="end"
          aria-label="User Account"
          aria-haspopup="true"
          color="inherit"
          sx={{ px: 2}}
          onClick={() => {
            let storageManager = new LocalStorageManager();
            storageManager.clearStorageData();
            dispatch(setAuthenticated(false));
            navigate("/");
          }}
        >
          <Tooltip title="Logout">
            <Logout />
          </Tooltip>
      </IconButton>
    </Toolbar>
    </AppBar>
    );
}

export default TopBar;