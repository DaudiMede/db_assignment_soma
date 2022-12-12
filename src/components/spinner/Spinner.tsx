import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
const Spinner = () => {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => {
    setOpen(false);
  };
  
//   const handleToggle = () => {
//     setOpen(!open);
//   };

  return (
    <div>
      <Backdrop
        sx={{ color: '#f4f4f4', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
         <CircularProgress color="inherit" size={70}/>
      </Backdrop>
    </div>
  );
}

export default Spinner;