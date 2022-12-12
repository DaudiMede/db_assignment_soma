import { Box, Button, Grid, TextField } from "@mui/material";
import { useState } from "react";
import CustomCard from "../../../components/cards/CustomCard";
import { initialRoleData } from "../../../constants/initial_type_data";
import { typeRole } from "../../../constants/types";
import Role from "../../../models/Role";

const AddRoles = () => {
    const [formState, setformState] = useState(initialRoleData);
    const handleFormElementChange = (fieldName: string, fieldValue: any) => {
        setformState({
            ...formState,
            [fieldName]: fieldValue
        });
    }

    const handleFormSubmit = async () => {
        let role = new Role();
        let roleData:typeRole = initialRoleData;
        roleData = await role.save(formState);

        if(roleData.id != null){
            setformState(initialRoleData);
            console.log("saved");
        }
    }
    
    return(
        <CustomCard title="Role Details">
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
                            label="Role Name"
                            name="roleName"
                            value={formState.roleName}
                            fullWidth
                            onChange={(e) => handleFormElementChange(e.target.name, e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField 
                            label="Status"
                            name="status"
                            value={formState.status}
                            fullWidth
                            onChange={(e) => handleFormElementChange(e.target.name, e.target.value)}
                        />
                    </Grid>
                </Grid>
                <Box sx={{m:3}} />
                <Button variant="contained" type="submit">Add Role</Button>
                </form>
            </Box>
        </CustomCard>
    );
}

export default AddRoles;