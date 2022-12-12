import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CardHeader from '@mui/material/CardHeader';
import { useState } from 'react';
import { initialAuthData } from '../../../../constants/initial_type_data';
import Authentication from '../../../../models/Authentication';
import LocalStorageManager from '../../../../models/LocalStorageManager';
import { typeUser } from '../../../../constants/types';
import { useAppDispatch } from '../../../../store/hooks';
import { setAuthenticated } from '../../../../store/slices/AuthSlice';
import { useNavigate } from 'react-router';


const SignIn = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [formState, setformState] = useState(initialAuthData);
  const handleFormElementChange = (fieldName: string, fieldValue: any) => {
    setformState({
      ...formState,
      [fieldName]: fieldValue
    });
  }

  const handleFormSubmit = async () => {
      if(formState.username && formState.password){
          let auth = new Authentication();
          let storageManager = new LocalStorageManager();

          let userData:typeUser = await auth.authenticateUser(formState);
          if(userData.id != null){
            storageManager.saveDataToLocalStorage(userData);

            dispatch(setAuthenticated(true));
            navigate('/home');
          }
      }
  }
  
   return (
    <div style={{ margin:'auto', paddingTop:200}}>
      <Card 
        sx={{ maxWidth: 450, direction:'column', m: 'auto', borderTop: '1px solid blue'}}
      >
        <CardHeader 
        title="Sign In"
        />
        <CardContent>
          <form onSubmit={(e) => {
            e.preventDefault();
            handleFormSubmit();
          }}>
              <TextField 
                id="username" 
                label="Username" 
                variant="outlined" 
                name="username"
                fullWidth
                onChange={(e) => {
                  handleFormElementChange(e.target.name, e.target.value);
                }}
              />
              <Box m={3}></Box>
              <TextField 
                id="password" 
                label="Password" 
                variant="outlined" 
                name="password"
                type="password"
                fullWidth
                onChange={(e) => {
                  handleFormElementChange(e.target.name, e.target.value);
                }}
              />
              <Box m={3}></Box>
              <Button 
                variant="contained" 
                sx={{ p:1 }} 
                fullWidth
                type="submit"
              >Login</Button>
          </form>
         </CardContent>
      </Card>
    </div>
 );
}

export default SignIn;