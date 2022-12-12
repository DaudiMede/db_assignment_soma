import { Box, Button, Grid } from "@mui/material";
import { useState } from "react";
import CustomCard from "../../components/cards/CustomCard";
import FullScreenDialog from "../../components/dialog/FullscreenDialog";
import CourseWorkResultUpload from "./course-work/pages/CourseWorkUpload";
import FinalResultUpload from "./final-examination/pages/ResultUpload";


const ResultPage = () => {
    const [caDialogState, setCaDialogState] = useState(false);
    const [feDialogState, setFeDialogState ] = useState(false);

    const toggleCaDialogState = () => {
            setCaDialogState(!caDialogState);
    }

     const toggleFeDialogState = () => {
            setFeDialogState(!feDialogState);
    }

    return(
        <CustomCard title="Course Work Result">
            <div>
                <Box sx={{}}>
                { localStorage.getItem("role0") === 'LECTURER' ? 
                    <Grid spacing={3} container>
                        <Grid item>
                            <Button variant="contained" onClick={toggleCaDialogState}>Upload CA Results</Button>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" onClick={toggleFeDialogState}>Upload FE Results</Button>
                        </Grid>
                    </Grid> : null 
                }
                </Box>
                <FullScreenDialog title="Upload Result" child={<CourseWorkResultUpload />} isOpen={caDialogState} handleDialogClose={toggleCaDialogState}/>
                <FullScreenDialog title="Upload Result" child={<FinalResultUpload />} isOpen={feDialogState} handleDialogClose={toggleFeDialogState}/>
            </div>
        </CustomCard>
    );
}

export default ResultPage;