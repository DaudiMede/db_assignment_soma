import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import CustomCard from "../../../components/cards/CustomCard";
import FullScreenDialog from "../../../components/dialog/FullscreenDialog";
import CustomTable from "../../../components/table/CustomTable";
import { roleColumns } from "../../../constants/table-colums";
import { typeRole } from "../../../constants/types";
import Role from "../../../models/Role";
import AddRoles from "./AddRole";

let initialRows:typeRole[] = [];

const Roles = () => {
    const [rows, setRows] = useState(initialRows);
    const [dialogState, setDialogState] = useState(false);
    const loadData = async () => {
        let role = new Role();
        initialRows = await role.getAll();
        setRows(initialRows);
    }

    useEffect(() => {
        loadData();
    }, []);
    
    const toggleDialogState = () => {
        setDialogState(!dialogState);
    }

    return(
        <CustomCard title="Roles">
            <Box>
                <Button variant="contained" onClick={toggleDialogState}>Add Role</Button>
                <Box sx={{m:3}} />
                <CustomTable 
                    rows={rows}
                    columns={roleColumns}
                    pageSize={5}
                    rowsPerPageOptions={5}
                />
                <FullScreenDialog 
                    child={<AddRoles />}
                    title="Add Roles"
                    isOpen={dialogState}
                    handleDialogClose={toggleDialogState}
                />
            </Box>
        </CustomCard>
    );
}

export default Roles;