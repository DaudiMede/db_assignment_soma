import { Box, Button, Grid } from '@mui/material';
import CustomCard from '../../../../components/cards/CustomCard';

const FinalResultUpload = () => {
    return(
        <CustomCard title="Final Exam Result">
             <div>
                <Grid container>

                </Grid>
                <Box sx={{m:3}} />
                <Button variant="contained">Upload</Button>
             </div>
        </CustomCard>
    );
}

export default FinalResultUpload;