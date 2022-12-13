import CustomCard from '../../../components/cards/CustomCard';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import FullScreenDialog from '../../../components/dialog/FullscreenDialog';
import AddModule from './AddModule';
import Module from '../../../models/Module';
import { typeModule } from '../../../constants/types';
import { Box } from '@mui/material';
import { moduleColumns } from '../../../constants/table-colums';
import CustomTable from '../../../components/table/CustomTable';

let initialrows:typeModule[] = [];

const Modules = () => {
    const [dialogState, setDialogState] = useState(false);
    const [rows, setRows] = useState(initialrows);
    const loadData = async () => {
        let module = new Module();
        initialrows = await module.getAll();
        setRows(initialrows);
    }

    useEffect(() => {
        loadData();
    }, []);
    const toggleDialogState = () => {
        setDialogState(!dialogState);
    }

    const fullScreenDialog = <FullScreenDialog title="Add Module" child={<AddModule />} handleDialogClose={toggleDialogState} isOpen={dialogState}/>

    return(
        <CustomCard title="Modules">
            <div>
                {localStorage.getItem("role0") === "ADMIN" ? <Button
                    variant="contained"
                    onClick={toggleDialogState}>
                    Add Module
                </Button> : null}
                <Box sx={{m:3}} />
                <CustomTable 
                    rows={rows} 
                    columns={moduleColumns} 
                    pageSize={5} 
                    rowsPerPageOptions={5} 
                />
                {fullScreenDialog}
            </div>
        </CustomCard>
    );
}

export default Modules;