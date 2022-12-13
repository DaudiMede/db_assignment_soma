import { Box, Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useEffect, useState } from 'react';
import CustomCard from '../../../../components/cards/CustomCard';
import CustomTable from '../../../../components/table/CustomTable';
import { caResultColumns } from '../../../../constants/table-colums';
import { typeStudent } from '../../../../constants/types';
import Student from '../../../../models/Student';

let initialrows:typeStudent[] = [];
const tableHeaders:string[] = ['Full Name', 'Reg Number', 'Score'];

const FinalResultUpload = () => {
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
        <CustomCard title="Final Exam Result">
             <div>
                <CustomCard title='Results'>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell>#</TableCell>
                            { tableHeaders.map((header) => <TableCell align="left">{header}</TableCell>)}
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows.map((row, index) => (
                            <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row">{ index + 1}</TableCell>
                            <TableCell component="th" scope="row">{ row.firstName } { row.middleName } { row.lastName }</TableCell>
                            <TableCell component="th" scope="row">{ row.regNumber }</TableCell>
                            <TableCell component="th" scope="row"></TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                    </TableContainer>
                </CustomCard>
                <Box sx={{m:3}} />
                <Button variant="contained">Upload</Button>
             </div>
        </CustomCard>
    );
}

export default FinalResultUpload;