import CustomCard from '../../../../components/cards/CustomCard';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import FullScreenDialog from '../../../../components/dialog/FullscreenDialog';
import CourseWorkResultUpload from '../pages/CourseWorkUpload';
import { useState } from 'react';

const CourseWorkResult = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleDialogState = () => {
            setIsDialogOpen(!isDialogOpen);
    }

    return(
        <CustomCard title="Course Work Result">
            <div>
                <Box sx={{}}>
                    <Button variant="contained" onClick={ handleDialogState }>Upload CA Results</Button>
                </Box>
                <FullScreenDialog title="" child={<CourseWorkResultUpload />} isOpen={isDialogOpen} handleDialogClose={handleDialogState}/>
            </div>
        </CustomCard>
    );
}

export default CourseWorkResult;