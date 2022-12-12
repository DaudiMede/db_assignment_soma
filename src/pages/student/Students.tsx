import CustomTable from "../../components/table/CustomTable";
import { studentsTableColumns } from "../../constants/table-colums";
import { typeStudent } from "../../constants/types";
import { useState, useEffect } from 'react';
import Student from "../../models/Student";
import CustomCard from "../../components/cards/CustomCard";

let initialrows:typeStudent[] = [];

const Students = () => {
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
        <CustomCard title="Students">
            <CustomTable 
            rows={rows}
            columns={studentsTableColumns}
            pageSize={10}
            rowsPerPageOptions={10}
        />
        </CustomCard>
    );
}

export default Students;