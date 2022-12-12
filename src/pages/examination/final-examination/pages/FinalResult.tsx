import CustomCard from '../../../../components/cards/CustomCard';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import FullScreenDialog from '../../../../components/dialog/FullscreenDialog';
import FinalResultUpload from './ResultUpload';
import { useState } from 'react';

const FinalResult = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleDialogState = () => {
            setIsDialogOpen(!isDialogOpen);
    }

    return(
        <CustomCard title="Final Exam Result">
            <div>
                <Box sx={{}}>
                    <Button variant="contained" onClick={ handleDialogState }>Upload FE Results</Button>
                </Box>
                <FullScreenDialog title="" child={<FinalResultUpload />} isOpen={isDialogOpen} handleDialogClose={handleDialogState}/>
            </div>
        </CustomCard>
    );
}

export default FinalResult;