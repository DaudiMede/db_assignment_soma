import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import CustomCard from "../../../components/cards/CustomCard";
import CustomTable from "../../../components/table/CustomTable";
import { userColumns } from "../../../constants/table-colums";
import { typeUser } from "../../../constants/types";
import User from "../../../models/User";

let initialRows:typeUser[] = [];

const Users = () => {
    const [rows, setRows] = useState(initialRows);
    const loadData = async () => {
        let user = new User();
        initialRows = await user.getAll();
        setRows(initialRows);
    }

    useEffect(() => {
        loadData();
    }, []);
    
    return(
        <CustomCard title="Users">
            <Box>
                <CustomTable 
                   rows={rows}
                   columns={userColumns}
                   pageSize={5}
                   rowsPerPageOptions={5}
                />
            </Box>
        </CustomCard>
    );
}

export default Users;