import CustomCard from "../../../components/cards/CustomCard";
import { Box, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import { useEffect, useState } from 'react';
import { typeCourse, typeEntryCategory, typeStudent } from "../../../constants/types";
import Student from "../../../models/Student";
import Course from "../../../models/Course";
import EntryCategory from "../../../models/EntryCategory";
import { studentInitialdata } from "../../../constants/initial_type_data";
import { Category } from "@mui/icons-material";
// import { useForm } from "react-hook-form";


const spacingFactor:number = 3;
let courseList:typeCourse[] = [];
let categoryList:typeEntryCategory[] = [];

const Application = () => {

    const [formState, setFormState] = useState(studentInitialdata);
    const [courses, setCourses] = useState(courseList);
    const [categories, setCategories] = useState(categoryList);
    const handleFormElementChange = (fieldName: string, fieldValue: any) => {
        setFormState({
            ...formState,
            [fieldName]: fieldValue
        });
    }

    const loadData = async () => {
        let course = new Course();
        courseList = await course.getAll();
        setCourses(courseList);

        let category = new EntryCategory();
        categoryList = await category.getAll();
        setCategories(categoryList);
    }

    const handleFormSubmit = async () => {
        let studentData:typeStudent = formState;
        let student = new Student();
        studentData = await student.save(studentData);
        if(studentData.id != null){
            //display success message
            setFormState(formState);
        }
    }

    useEffect(() => {
        loadData();
    }, []);

    return(
        <CustomCard title="Student Application">
            <div>
            <Typography variant="h6">Student Details</Typography>
            <Box sx={{m:spacingFactor}} />
                <form onSubmit={(e) => {
                    e.preventDefault();
                    handleFormSubmit();
                }}>
                 <Grid container spacing={3}>
                    <Grid item sm={12} md={6}>
                        <Grid item>
                            <TextField 
                            label="First Name"
                            name="firstName"
                            value={formState.firstName}
                            onChange={(e) => handleFormElementChange(e.target.name, e.target.value)}
                            fullWidth
                            />
                        </Grid>
                        <Box sx={{m:spacingFactor}} />
                        <Grid item>
                            <TextField 
                            label="Middle Name"
                            name="middleName"
                            value={formState.middleName}
                            onChange={(e) => handleFormElementChange(e.target.name, e.target.value)}
                            fullWidth
                            />
                        </Grid>
                        <Box sx={{m:spacingFactor}} />
                        <Grid item>
                            <TextField 
                            label="Last Name"
                            name="lastName"
                            value={formState.lastName}
                            onChange={(e) => handleFormElementChange(e.target.name, e.target.value)}
                            fullWidth
                            />
                        </Grid>
                        <Box sx={{m:spacingFactor}} />
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
                        <Box sx={{m:spacingFactor}} />
                        <FormControl fullWidth>
                            <InputLabel id="diability">Disability</InputLabel>
                            <Select
                                labelId="disability"
                                id="disability"
                                label="disability"
                                name="disability"
                                value={formState.disability}
                                onChange={(e) => handleFormElementChange(e.target.name, e.target.value)}
                            >
                            <MenuItem value={"NONE"}>None</MenuItem>
                            </Select>
                        </FormControl>
                        <Box sx={{m:spacingFactor}} />
                        <Grid item>
                            <TextField 
                            label="Form Four IndexNumber"
                            name="cseeIndex"
                            value={formState.cseeIndex}
                            onChange={(e) => handleFormElementChange(e.target.name, e.target.value)}
                            fullWidth
                            />
                        </Grid>
                        <Box sx={{m:spacingFactor}} />
                    </Grid>
                    <Grid item  sm={12} md={6}>
                        <Grid item>
                            <TextField 
                            label="Phone Number"
                            name="phoneNumber"
                            value={formState.phoneNumber}
                            onChange={(e) => handleFormElementChange(e.target.name, e.target.value)}
                            fullWidth
                            />
                        </Grid>
                        <Box sx={{m:spacingFactor}} />
                        <Grid item>
                            <TextField 
                            label="Email"
                            name="email"
                            value={formState.email}
                            onChange={(e) => handleFormElementChange(e.target.name, e.target.value)}
                            fullWidth
                            />
                        </Grid>
                        <Box sx={{m:spacingFactor}} />
                        <Grid item>
                            <TextField 
                            label="Address"
                            name="address"
                            value={formState.address}
                            onChange={(e) => handleFormElementChange(e.target.name, e.target.value)}
                            fullWidth
                            />
                        </Grid>
                        <Box sx={{m:spacingFactor}} />
                        <Grid item>
                            <TextField 
                            label="Guardian Full Name"
                            name="guardianName"
                            value={formState.guardianName}
                            onChange={(e) => handleFormElementChange(e.target.name, e.target.value)}
                            fullWidth
                            />
                        </Grid>
                        <Box sx={{m:spacingFactor}} />
                        <Grid item>
                            <TextField 
                            label="Phone Number"
                            name="guardianContacts"
                            value={formState.guardianContact}
                            onChange={(e) => handleFormElementChange(e.target.name, e.target.value)}
                            fullWidth
                            />
                        </Grid>
                        <Box sx={{m:spacingFactor}} />
                        <Grid item>
                            <TextField 
                            label="Permanent Address"
                            name="address"
                            value={formState.address}
                            onChange={(e) => handleFormElementChange(e.target.name, e.target.value)}
                            fullWidth
                            />
                        </Grid>
                        <Box sx={{m:spacingFactor}} />
                    </Grid>
                </Grid>
                <Box sx={{m:spacingFactor}} />
                <Typography variant="h6">Application Details</Typography>
                <Box sx={{m:spacingFactor}} />
                <Grid container spacing={3}>
                    <Grid item sm={12} md={6}>
                        <FormControl fullWidth>
                            <InputLabel id="diability">Application Category</InputLabel>
                            <Select
                                labelId="category"
                                id="category"
                                label="Application Category"
                                name="category"
                                value={formState.category}
                                onChange={(e) => handleFormElementChange(e.target.name, e.target.value)}
                            >
                            { categories.map((category) => <MenuItem value={category.id} key={category.id}>{ category.categoryName }</MenuItem>)}
                            </Select>
                        </FormControl>
                        <Box sx={{m:spacingFactor}} />
                        <FormControl fullWidth>
                            <InputLabel id="course">Course Selection</InputLabel>
                            <Select
                                labelId="course"
                                id="course"
                                label="Course Selection"
                                value={formState.course}
                                onChange={(e) => handleFormElementChange(e.target.name, e.target.value)}
                                name="course"
                            >
                            {courses.map((course) => <MenuItem value={course.id} key={course.id}>{ course.courseName }</MenuItem>)}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <FormControl fullWidth>
                            <InputLabel id="entryCategory">Entry Category</InputLabel>
                            <Select
                                labelId="entryCategory"
                                id="entryCategory"
                                label="Entry Category"
                                name="entryCategory"
                                value={formState.category}
                                onChange={(e) => handleFormElementChange(e.target.name, e.target.value)}
                            >
                            <MenuItem value={1}>ACSEE Entry</MenuItem>
                            <MenuItem value={2}>Diploma Entry</MenuItem>
                            </Select>
                        </FormControl>
                        <Box sx={{m:spacingFactor}} />
                        <FormControl fullWidth>
                            <InputLabel id="acseeIndex">Form Six Index Number</InputLabel>
                            <Select
                                labelId="acseeIndex"
                                id="acseeIndex"
                                label="Form Six Index Number"
                                name="acseeIndex"
                                value={formState.cseeIndex}
                                onChange={(e) => handleFormElementChange(e.target.name, e.target.value)}
                            >
                            <MenuItem value={"NONE"}>None</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            <Box sx={{m:spacingFactor}} />
            <Button variant="contained" type="submit">Submit Application</Button>
                </form>
            </div>
        </CustomCard>
    );
}

export default Application;