import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import CustomCard from "../../../components/cards/CustomCard";
import { initialStaffData } from "../../../constants/initial_type_data";
import { typeDepartment, typeRole } from "../../../constants/types";
import Department from "../../../models/Department";
import Role from "../../../models/Role";
import Staff from "../../../models/Staff";

let departmentList:typeDepartment[] = [];
let initialRoles:typeRole[] = [];

const AddStaff = () => {
    const [formState, setformState] = useState(initialStaffData);
    const [roles, setRoles] = useState(initialRoles);
    const [ departments, setDepartments] = useState(departmentList);
    const handleFormElementChange = (fieldName: string, fieldValue: any) => {
        setformState({
            ...formState,
            [fieldName]: fieldValue
        });
    }
    const loadData = async () => {
        let department = new Department();
        departmentList = await department.getAll();
        setDepartments(departmentList);

        let role = new Role();
        initialRoles = await role.getAll();
        setRoles(initialRoles);
    }

    useEffect(() => {
        loadData();
    }, []);

    const handleFormSubmit = async () => {
        let staff = new Staff();
        let staffData = await staff.save(formState);
        
        if(staffData.id != null){
            setformState(initialStaffData);
            console.log("saved");
        }
    }
    
    return(
        <CustomCard title="Staff Details">
            <Box>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleFormSubmit();
                    }}
                >
                    <Grid spacing={3} container>
                    <Grid item xs={12} md={6}>
                        <TextField 
                            label="First Name"
                            name="firstName"
                            value={formState.firstName}
                            fullWidth
                            onChange={(e) => handleFormElementChange(e.target.name, e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField 
                            label="Middle Name"
                            name="middleName"
                            value={formState.middleName}
                            fullWidth
                            onChange={(e) => handleFormElementChange(e.target.name, e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField 
                            label="Last Name"
                            name="lastName"
                            value={formState.lastName}
                            fullWidth
                            onChange={(e) => handleFormElementChange(e.target.name, e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <FormControl fullWidth>
                            <InputLabel id="gender">Gender</InputLabel>
                            <Select
                                labelId="gender"
                                id="gender"
                                name="gender"
                                label="Gender"
                                value={formState.gender}
                                onChange={(e) => handleFormElementChange(e.target.name, e.target.value)}
                            >
                            <MenuItem value={"MALE"}>Male</MenuItem>
                            <MenuItem value={"FEMALE"}>Female</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField 
                            label="Phone Number"
                            name="phoneNumber"
                            value={formState.phoneNumber}
                            fullWidth
                            onChange={(e) => handleFormElementChange(e.target.name, e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField 
                            label="Email"
                            name="email"
                            value={formState.email}
                            fullWidth
                            onChange={(e) => handleFormElementChange(e.target.name, e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <FormControl fullWidth>
                            <InputLabel id="gender">Department</InputLabel>
                            <Select
                                labelId="department"
                                id="department"
                                name="departmentId"
                                label="Department"
                                value={formState.departmentId}
                                onChange={(e) => handleFormElementChange(e.target.name, e.target.value)}
                            >
                            {departments.map((department) => <MenuItem value={department.id}>{ department.departmentName }</MenuItem>)}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <FormControl fullWidth>
                            <InputLabel id="gender">Role</InputLabel>
                            <Select
                                labelId="role"
                                id="role"
                                name="roleId"
                                label="Role"
                                value={formState.roleId}
                                onChange={(e) => handleFormElementChange(e.target.name, e.target.value)}
                            >
                            {roles.map((role) => <MenuItem value={role.id}>{ role.roleName }</MenuItem>)}
                            </Select>
                        </FormControl>
                    </Grid>
                     <Grid item xs={12} md={6}>
                        <FormControl fullWidth>
                            <InputLabel id="gender">Status</InputLabel>
                            <Select
                                labelId="status"
                                id="status"
                                name="status"
                                label="Status"
                                value={formState.status}
                                onChange={(e) => handleFormElementChange(e.target.name, e.target.value)}
                            >
                            <MenuItem value={"ACTIVE"}>ACTIVE</MenuItem>
                            <MenuItem value={"IN aCTIVE"}>IN ACTIVE</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
                <Box sx={{m:3}} />
                <Button variant="contained" type="submit">Add Staff</Button>
                </form>
            </Box>
        </CustomCard>
    );
}

export default AddStaff;