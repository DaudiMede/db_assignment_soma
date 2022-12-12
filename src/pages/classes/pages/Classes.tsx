import CustomCard from '../../../components/cards/CustomCard';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import FullScreenDialog from '../../../components/dialog/FullscreenDialog';
import { typeClass } from '../../../constants/types';
import AddClass from './AddClass';
import CustomTable from '../../../components/table/CustomTable';
import { Box } from '@mui/material';
import { classColumns } from '../../../constants/table-colums';
import ProgramClass from '../../../models/ProgramClass';

let initialRows:typeClass[] = [];

const Classes = () => {
    const [rows, setRows] = useState(initialRows);
    const [dialogState, setDialogState] = useState(false);

    const loadData = async () => {
       let programClass = new ProgramClass();
       initialRows = await programClass.getAll();

       setRows(initialRows);
    }

    useEffect(() => {
        loadData();
    }, []);
    
    const toggleDialogState = () => {
        setDialogState(!dialogState);
    }

    const fullScreenDialog = <FullScreenDialog title="Add Class" child={<AddClass />} handleDialogClose={toggleDialogState} isOpen={dialogState}/>

    return(
        <CustomCard title="Classes">
            <div>
                <Button variant="contained" onClick={ toggleDialogState }>Add Class</Button>
                <Box sx={{m:3}} />
                <CustomTable 
                    rows={rows}
                    columns={classColumns}
                    pageSize={5}
                    rowsPerPageOptions={5}
                />
                {fullScreenDialog}
            </div>
        </CustomCard>
    );
}

export default Classes;