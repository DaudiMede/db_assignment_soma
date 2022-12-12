import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import CustomCard from "../../../components/cards/CustomCard";
import CustomTable from "../../../components/table/CustomTable";
import { studentsTableColumns } from "../../../constants/table-colums";
import { typeStudent } from "../../../constants/types";
import Student from "../../../models/Student";

let initialrows:typeStudent[] = [];

const Applications = () => {
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
        <CustomCard title="Student Applications">
            <Box>
            <CustomTable 
                rows={rows}
                columns={studentsTableColumns}
                pageSize={5}
                rowsPerPageOptions={5}
            />
            </Box>
        </CustomCard>
    );
}

export default Applications;