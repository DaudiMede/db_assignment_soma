import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import CustomCard from '../../../components/cards/CustomCard';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useState } from 'react';
import { initialDeptData } from '../../../constants/initial_type_data';
import Department from '../../../models/Department';
import { typeDepartment } from '../../../constants/types';


const AddDepartment = () => {

    const [formState, setFormState] = useState(initialDeptData);

    const handleFormElementChange = (fieldName: string, fieldValue: any) => {
        setFormState({
            ...formState,
            [fieldName]: fieldValue
        });
    }

    const handleFormSubmit = async () => {
        let department = new Department();
        let departmentData:typeDepartment = initialDeptData;
        departmentData = await department.save(formState);

        if(departmentData.id != null){
            setFormState(initialDeptData);
            console.log("saved");
        }
    }
    return(
        <Box>
            <CustomCard title='Department Details'>
                <form action="">
                    <Grid container spacing={3}>
                        <Grid item md={6} xs={12}>
                            <TextField 
                            label="Department Name"
                            name="departmentName"
                            value={formState.departmentName}
                            onChange={(e) => handleFormElementChange(e.target.name, e.target.value)}
                            fullWidth
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <FormControl fullWidth>
                                <InputLabel id="status">Status</InputLabel>
                                <Select
                                    labelId="status"
                                    id="status"
                                    label="Status"
                                    value={formState.status}
                                    onChange={(e) => {
                                        handleFormElementChange(e.target.name, e.target.value);
                                    }}
                                    name="status"
                                >
                                <MenuItem value={'IN ACTIVE'}>IN ACTIVE</MenuItem>
                                <MenuItem value={'ACTIVE'}>ACTIVE</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                       </Grid>
                       <Box sx={{ pt: 3}} />
                        <Button
                            variant="contained"
                            onClick={(e) => {
                                e.preventDefault();
                                handleFormSubmit();
                            }}
                        >Add Department</Button>
                </form>
            </CustomCard>
        </Box>
    );
}

export default AddDepartment;