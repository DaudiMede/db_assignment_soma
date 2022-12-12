import { Box, Button, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import CustomCard from '../../../../components/cards/CustomCard';
import CustomTable from '../../../../components/table/CustomTable';
import { caResultColumns } from '../../../../constants/table-colums';
import { typeResult, typeStudent } from '../../../../constants/types';
import Student from '../../../../models/Student';

let initialrows:typeStudent[] = [];

const CourseWorkResultUpload = () => {
    const [rows, setRows] = useState(initialrows);
    const loadData = async () => {
        let student = new Student();
        initialrows = await student.getAll();
        setRows(initialrows);
    }

    useEffect(() => {
        loadData();
    }, []);
    
    return(
        <CustomCard title="Course Work Result">
            <div>
                <Grid container>
                    <CustomTable 
                        rows={rows}
                        columns={caResultColumns}
                        pageSize={10}
                        rowsPerPageOptions={10}
                    />
                </Grid>
                <Box sx={{m:3}} />
                <Button variant="contained">Upload</Button>
            </div>
        </CustomCard>
    );
}

export default CourseWorkResultUpload;