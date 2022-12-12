import CustomCard from '../../../components/cards/CustomCard';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import FullScreenDialog from '../../../components/dialog/FullscreenDialog';
import AddDepartment from './AddDepartment';
import CustomTable from '../../../components/table/CustomTable';
import { typeDepartment } from '../../../constants/types';
import Department from '../../../models/Department';
import { departmentColumns } from '../../../constants/table-colums';
import { Box } from '@mui/material';

let initialrows:typeDepartment[] = [];

const Departments = () => {
    const[dialogState, setDialogState] = useState(false);
    const[rows, setRows] = useState(initialrows);
    const toggleDialogState = () => {
        setDialogState(!dialogState);
    };

    const loadData = async () => {
        let department = new Department();
        initialrows = await department.getAll();
        setRows(initialrows);

    }

    useEffect(() => {
        loadData();
    }, []);

    const fullScreenDialog = <FullScreenDialog title="Add Department" child={<AddDepartment />} handleDialogClose={toggleDialogState} isOpen={dialogState}/>

    return(
        <CustomCard title="Departments">
            <div>
                <Button variant="contained" onClick={ toggleDialogState }>Add Department</Button>
                <Box sx={{m:3}} />
                <CustomTable 
                    rows={rows}
                    columns={departmentColumns}
                    pageSize={5}
                    rowsPerPageOptions={5}
                />
                 {fullScreenDialog}
            </div>
        </CustomCard>
    );
}

export default Departments;