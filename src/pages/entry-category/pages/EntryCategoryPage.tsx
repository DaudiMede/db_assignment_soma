import { Box, Button } from "@mui/material";
import CustomCard from "../../../components/cards/CustomCard";
import CustomTable from "../../../components/table/CustomTable";
import { useState, useEffect } from "react";
import { typeEntryCategory } from "../../../constants/types";
import { entryCategoryColumns } from "../../../constants/table-colums";
import EntryCategory from "../../../models/EntryCategory";
import FullScreenDialog from "../../../components/dialog/FullscreenDialog";
import AddEntryCategory from "./AddCategory";

let initialRows:typeEntryCategory[] = [];

const EntryCategoryPage = () => {
    const [rows, setRows] = useState(initialRows);
    const [dialogState, setDialogState] = useState(false);
    const loadData = async () => {
        let entryCategory = new EntryCategory();
        let categotyList:typeEntryCategory[] = [];
        categotyList = await entryCategory.getAll();
        setRows(categotyList);
    }

    const toggleDialogState = () => {
        setDialogState(!dialogState);
    }
    useEffect(() => {
        loadData();
    }, []);
    return(
        <CustomCard title="Enrty Category">
           <Box>
                <Button variant="contained" onClick={toggleDialogState}>Add Category</Button>
                <Box sx={{m:3}}/>
                <CustomTable 
                    rows={rows}
                    columns={entryCategoryColumns}
                    pageSize={5}
                    rowsPerPageOptions={5}
                />
                <FullScreenDialog title="Add Category" handleDialogClose={toggleDialogState} isOpen={dialogState} child={<AddEntryCategory />}/>
           </Box>
        </CustomCard>
    );
}

export default EntryCategoryPage;