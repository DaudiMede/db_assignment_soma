import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import CustomCard from "../../../components/cards/CustomCard";
import FullScreenDialog from "../../../components/dialog/FullscreenDialog";
import CustomTable from "../../../components/table/CustomTable";
import { staffColumns } from "../../../constants/table-colums";
import { typeStaff } from "../../../constants/types";
import Staff from "../../../models/Staff";
import AddStaff from "./AddStaff";

let initialRows:typeStaff[] = [];

const StaffPage = () => {
    const [rows, setRows] = useState(initialRows);
    const [dialogState, setDialogState] = useState(false);
    const loadData = async () => {
       let staff = new Staff();
       let staffList = await staff.getAll();
       setRows(staffList);
    }

    useEffect(() => {
        loadData();
    }, []);
    
    const toggleDialogState = () => {
        setDialogState(!dialogState);
    }

    return(
        <CustomCard title="Staff">
            <Box>
                <Button variant="contained" onClick={toggleDialogState}>Add Staff</Button>
                <Box sx={{m:3}} />
                <CustomTable 
                    rows={rows}
                    columns={staffColumns}
                    pageSize={5}
                    rowsPerPageOptions={5}
                />
                <FullScreenDialog 
                    child={<AddStaff />}
                    title="Add Staff"
                    isOpen={dialogState}
                    handleDialogClose={toggleDialogState}
                />
            </Box>
        </CustomCard>
    );
}

export default StaffPage;