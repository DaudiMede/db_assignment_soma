import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CardHeader from '@mui/material/CardHeader';

const SignUp = () => {
  
   return (
    <div style={{ margin:'auto', paddingTop:200}}>
      <Card 
        sx={{ maxWidth: 450, direction:'column', m: 'auto'}}
      >
        <CardHeader 
        title="Sign Up"
        alignItems="center"
        />
         <CardContent>
            <form action="">
                <TextField id="email" label="Email" variant="outlined" fullWidth/>
                <Box m={3}></Box>
                <TextField id="password" label="Password" variant="outlined" fullWidth/>
                <TextField id="confirm-password" label="Confirm Password" variant="outlined" fullWidth/>
                <Box m={3}></Box>
                <Button 
                  variant="contained" 
                  sx={{ p:1 }} 
                  fullWidth
                >Login</Button>
            </form>
         </CardContent>
      </Card>
    </div>
 );
}

export default SignUp;