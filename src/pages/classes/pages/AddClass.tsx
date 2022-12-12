import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import CustomCard from "../../../components/cards/CustomCard";
import { initialClassData } from "../../../constants/initial_type_data";
import { typeCourse, typeNtaLevel } from "../../../constants/types";
import Course from "../../../models/Course";
import NationalAward from "../../../models/NationalAward";
import ProgramClass from "../../../models/ProgramClass";

let listOfAwards:typeNtaLevel[] = [];
let listOfCourses:typeCourse[] = [];

const AddClass = () => {
    const [awards, setAwards] = useState(listOfAwards);
    const [courses, setCourses] = useState(listOfCourses);
    const [formState, setformState] = useState(initialClassData);
    const handleFormElementChange = (fieldName: string, fieldValue: any) => {
        setformState({
            ...formState,
            [fieldName]: fieldValue
        });
    }
    const loadData = async () => {
        let course = new Course();
        let listOfCourses = await course.getAll();
        setCourses(listOfCourses);
        let award = new NationalAward();
        let listOfAwards = await award.getAll();
         setAwards(listOfAwards);
    }

    useEffect(() => {
        loadData();
    }, []);

    const handleFormSubmit = async () => {
        let programClass = new ProgramClass();
        let classData = await programClass.save(formState);

        if(classData.id != null){
            setformState(initialClassData);
            console.log("Saved");
        }
    }

    return(
        <CustomCard title="Class Details">
            <form onSubmit={(e) => {
                e.preventDefault();
                handleFormSubmit();
            }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6} xl={4}>
                        <TextField
                            label="Class Name"
                            id="class-name"
                            value={formState.className}
                            onChange={(e) => {
                                handleFormElementChange(e.target.name, e.target.value);
                            }}
                            fullWidth
                            name="className"
                        />
                    </Grid>
                    <Grid item xs={12} md={6} xl={4}>
                         <FormControl fullWidth>
                                <InputLabel id="status">Course</InputLabel>
                                <Select
                                    labelId="Course"
                                    id="course"
                                    label="course"
                                    value={formState.courseId}
                                    onChange={(e) => {
                                        handleFormElementChange(e.target.name, e.target.value);
                                    }}
                                    name="courseId"
                                >
                                {courses.map((course) => <MenuItem value={course.id} key={course.id}>{course.courseName}</MenuItem>)}
                                </Select>
                            </FormControl>
                    </Grid>
                    <Grid item xs={12} md={6} xl={4}>
                         <FormControl fullWidth>
                                <InputLabel id="status">NTA Level</InputLabel>
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
                                {awards.map((award) => <MenuItem value={award.ntaLevel} key={award.id}>{award.ntaLevel}</MenuItem>)}
                                </Select>
                            </FormControl>
                    </Grid>
                    <Grid item xs={12} md={6} xl={4}>
                        <TextField
                            label="Starting Year"
                            id="startingYear"
                            value={formState.startingYear}
                            onChange={(e) => {
                                handleFormElementChange(e.target.name, e.target.value);
                            }}
                            fullWidth
                            name="startingYear"
                        />
                    </Grid>
                    <Grid item xs={12} md={6} xl={4}>
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
                <Box sx={{m:3}} />
                <Button type="submit" variant="contained">Add Class</Button>
            </form>
        </CustomCard>
    );
}

export default AddClass;