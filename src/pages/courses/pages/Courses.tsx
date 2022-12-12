import CustomCard from '../../../components/cards/CustomCard';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import FullScreenDialog from '../../../components/dialog/FullscreenDialog';
import AddCourse from './AddCourse';
import Course from '../../../models/Course';
import { typeCourse } from '../../../constants/types';
import { Box } from '@mui/material';
import { courseColumns } from '../../../constants/table-colums';
import CustomTable from '../../../components/table/CustomTable';

let courseList:typeCourse[] = [];

const Courses = () => {
    const[dialogState, setDialogState] = useState(false);
    const[rows, setRows] = useState(courseList);
    const loadData = async () => {
        let course = new Course();
        courseList = await course.getAll();
        setRows(courseList);
    }

    useEffect(() => {
        loadData();
    }, []);
    const toggleDialogState = () => {
        setDialogState(!dialogState);
    };

    const fullScreenDialog = <FullScreenDialog title="Add Course" child={<AddCourse />} handleDialogClose={toggleDialogState} isOpen={dialogState}/>

    return(
        <CustomCard title="Courses">
            <div>
                <Button variant="contained" onClick={ toggleDialogState }>Add Course</Button>
                <Box sx={{m:3}} />
                <CustomTable 
                    rows={rows}
                    columns={courseColumns}
                    pageSize={5}
                    rowsPerPageOptions={5}
                />
                {fullScreenDialog}
            </div>
        </CustomCard>
    );
}

export default Courses;