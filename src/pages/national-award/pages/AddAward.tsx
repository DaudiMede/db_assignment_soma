import { Box, Button, Grid, TextField } from "@mui/material";
import { useState } from "react";
import CustomCard from "../../../components/cards/CustomCard";
import { initialNTAData } from "../../../constants/initial_type_data";
import NationalAward from "../../../models/NationalAward";

const AddAward = () => {
    const [formState, setformState] = useState(initialNTAData);
    const handleFormElementChange = (fieldName: string, fieldValue: any) => {
        setformState({
            ...formState,
            [fieldName]: fieldValue
        });
    }

    const handleFormSubmit = async () => {
        let nationalAward = new NationalAward();
        let award = initialNTAData;
        award = await nationalAward.save(formState);

        if(award.id != null){
            setformState(initialNTAData);
        }
    }

    return(
        <CustomCard title="Award Details">
            <form onSubmit={(e) => {
                e.preventDefault();
                handleFormSubmit();
            }}>
                <Grid spacing={3} container>
                    <Grid xs={12} md={6} item>
                        <TextField 
                            label="Level"
                            type="number"
                            name="ntaLevel"
                            value={formState.ntaLevel}
                            onChange={(e) => handleFormElementChange(e.target.name, e.target.value)}
                            fullWidth
                        />
                    </Grid>
                    <Grid xs={12} md={6} item>
                         <TextField 
                            label="Semesters"
                            type="number"
                            name="numberOfSemester"
                            value={formState.numberOfSemester}
                            onChange={(e) => handleFormElementChange(e.target.name, e.target.value)}
                            fullWidth
                        />
                    </Grid>
                </Grid>
                <Box sx={{m:3}} />
                <Button variant="contained" type="submit">Add Level</Button>
            </form>
        </CustomCard>
    );
}

export default AddAward;