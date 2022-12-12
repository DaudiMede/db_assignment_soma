import { Box, Button } from "@mui/material";
import CustomCard from "../../../components/cards/CustomCard";
import FullScreenDialog from "../../../components/dialog/FullscreenDialog";
import CustomTable from "../../../components/table/CustomTable";
import AddAward from "./AddAward";
import { useEffect, useState } from "react";
import { typeNtaLevel } from "../../../constants/types";
import NationalAward from "../../../models/NationalAward";
import { ntaLevelColums } from "../../../constants/table-colums";

let initialrows:typeNtaLevel[] = [];

const NationalAwards = () => {
    const [dialogState, setDialogState] = useState(false);
    const [rows, setRows] = useState(initialrows);
    const toggleDialogState = () => {
        setDialogState(!dialogState);
    }

    const loadData = async () => {
        let nationalAward = new NationalAward();
        initialrows = await nationalAward.getAll();
        setRows(initialrows);
    }

    useEffect(() => {
        loadData();
    }, []);

    return(
        <CustomCard title="National Awards">
            <Box>
                <Button variant="contained" onClick={toggleDialogState}>Add Level</Button>
                <Box sx={{m:3}} />
                <CustomTable rows={rows} columns={ntaLevelColums} pageSize={5} rowsPerPageOptions={5}/>
                <FullScreenDialog title="Add Award Level" isOpen={dialogState} handleDialogClose={toggleDialogState} child={<AddAward />}/>
            </Box>
        </CustomCard>
    );
}

export default NationalAwards;