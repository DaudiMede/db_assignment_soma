import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import CustomCard from '../../../components/cards/CustomCard';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useEffect, useState } from 'react';
import { initialModuleData } from '../../../constants/initial_type_data';
import { typeDepartment, typeNtaLevel } from '../../../constants/types';
import Department from '../../../models/Department';
import NationalAward from '../../../models/NationalAward';
import Module from '../../../models/Module';

let ntaLevelList:typeNtaLevel[] = [];
let departmentList:typeDepartment[] = [];

const AddModule = () => {

    const [formState, setFormState] = useState(initialModuleData);
    const [ntaLevels, setNtaLevels] = useState(ntaLevelList);
    const [departments, setDepartments] = useState(departmentList);

    const handleFormElementChange = (fieldName: string, fieldValue: any) => {
        setFormState({
            ...formState,
            [fieldName]: fieldValue
        });
    };

    const loadData = async () => {
        let department = new Department();
        let nationalAward = new NationalAward();
        ntaLevelList = await nationalAward.getAll();
        departmentList = await department.getAll();

        setNtaLevels(ntaLevelList);
        setDepartments(departmentList);
    }

    const handleFormSubmit = async () => {
        let module = new Module();
        let moduleData = await module.save(formState);

        if(moduleData.id != null){
            setFormState(initialModuleData);
        }
    }

    useEffect(() => {
        loadData();
    }, []);

    return(
        <Box>
            <CustomCard title="Module Details">
                <form action="">
                    <Grid container spacing={3}>
                        <Grid item md={6} xs={12}>
                            <TextField 
                            label="Module Title"
                            name="moduleName"
                            value={formState.moduleName}
                            onChange={(e) => handleFormElementChange(e.target.name, e.target.value)}
                            fullWidth
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField 
                            label="Credits"
                            name="credits"
                            value={formState.credits}
                            type="number"
                            onChange={(e) => handleFormElementChange(e.target.name, e.target.value)}
                            fullWidth
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <FormControl fullWidth>
                                <InputLabel id="department">Department</InputLabel>
                                <Select
                                    labelId="department"
                                    id="department"
                                    label="department"
                                    value={formState.department}
                                    onChange={(e) => {
                                        handleFormElementChange(e.target.name, e.target.value);
                                    }}
                                    name="department"
                                >
                                {departments.map((department) => <MenuItem value={department.id} key={department.id}>{department.departmentName}</MenuItem>)}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <FormControl fullWidth>
                                <InputLabel id="ntaLevel">NTA Level</InputLabel>
                                <Select
                                    labelId="ntaLevel"
                                    id="ntaLevel"
                                    label="NTA Level"
                                    value={formState.ntaLevel}
                                    onChange={(e) => {
                                        handleFormElementChange(e.target.name, e.target.value);
                                    }}
                                    name="ntaLevel"
                                >
                                {ntaLevels.map((ntaLevel) => <MenuItem value={ntaLevel.id}>NTA Lavel {ntaLevel.ntaLevel}</MenuItem>)}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <FormControl fullWidth>
                                <InputLabel id="weight">Weight</InputLabel>
                                <Select
                                    labelId="weight"
                                    id="weight"
                                    label="weight"
                                    value={formState.subjectCategory}
                                    onChange={(e) => {
                                        handleFormElementChange(e.target.name, e.target.value);
                                    }}
                                    name="subjectCategory"
                                >
                                <MenuItem value="FUNDAMENTAL">Fundamental Module</MenuItem>
                                <MenuItem value="CORE">Core Module</MenuItem>
                                <MenuItem value="ELECTIVE">Elective Module</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                         <Grid item md={6} xs={12}>
                            <TextField 
                            label="Module Number"
                            name="moduleNumber"
                            value={formState.moduleNumber}
                            type="number"
                            onChange={(e) => handleFormElementChange(e.target.name, e.target.value)}
                            fullWidth
                            />
                        </Grid>
                       </Grid>
                       <Box sx={{ pt: 3}} />
                        <Button
                            variant="contained"
                            onClick={(e) => {
                                e.preventDefault();
                                handleFormSubmit();
                            }}
                        >Add Module</Button>
                </form>
            </CustomCard>
        </Box>
    );
}

export default AddModule;