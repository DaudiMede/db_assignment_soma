import { Box, Button, Grid, TextField } from "@mui/material";
import CustomCard from "../../../components/cards/CustomCard";
import { initialEntyCatData } from "../../../constants/initial_type_data";
import { useState } from 'react';
import EntryCategory from "../../../models/EntryCategory";
import { typeEntryCategory } from "../../../constants/types";

const AddEntryCategory = () => {
    const [formState, setFormState] = useState(initialEntyCatData);

    const handleFormElementChange = (fieldName: string, fieldValue: any) => {
        setFormState({
            ...formState,
            [fieldName]: fieldValue
        });
    };

    const handleFormSubmit = async () => {
        let entryCategory = new EntryCategory();
        let category:typeEntryCategory = initialEntyCatData;

        category = await entryCategory.save(formState);
        if(category.id != null){
            console.log("saved");
            setFormState(initialEntyCatData);
        }
    }

    return(
        <CustomCard title="Category Details">
           <Box>
            <form onSubmit={(e) => { e.preventDefault(); handleFormSubmit();}}>
                <Grid spacing={3} container>
                <Grid item xs={12} md={6}>
                    <TextField 
                        label="Name"
                        name="categoryName"
                        value={formState.categoryName}
                        onChange={(e) => {handleFormElementChange(e.target.name, e.target.value)}}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField 
                        label="Short Code"
                        name="shortCode"
                        value={formState.shortCode}
                        onChange={(e) => {handleFormElementChange(e.target.name, e.target.value)}}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField 
                        label="Status"
                        name="status"
                        value={"ACTIVE"}
                        onChange={(e) => {handleFormElementChange(e.target.name, e.target.value)}}
                        fullWidth
                    />
                </Grid>
            </Grid>
            <Box sx={{m:3}} />
                <Button variant="contained" type="submit">Add Category</Button>
            </form>
           </Box>
        </CustomCard>
    );
}

export default AddEntryCategory;