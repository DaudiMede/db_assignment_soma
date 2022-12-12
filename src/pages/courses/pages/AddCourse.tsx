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
import { initialCourseData } from '../../../constants/initial_type_data';
import Department from '../../../models/Department';
import EntryCategory from '../../../models/EntryCategory';
import { typeCourse, typeDepartment, typeEntryCategory } from '../../../constants/types';
import Course from '../../../models/Course';

let categoryList:typeEntryCategory[] = [];
let departmentList:typeDepartment[] = [];

const AddCourse = () => {
    const [formState, setformState] = useState(initialCourseData);
    const [categories, setCategories] = useState(categoryList);
    const [departments, setDepartments] = useState(departmentList);
    const handleFormElementChange = (fieldName: string, fieldValue: any) => {
        setformState({
            ...formState,
            [fieldName]: fieldValue
        });
    }

    const loadData = async () => {
        let category = new EntryCategory();
        let department = new Department();

        categoryList = await category.getAll();
        departmentList = await department.getAll();
        setDepartments(departmentList);
        setCategories(categoryList);
    }

    useEffect(() => {
        loadData();
    }, []);

    const handleFormSubmit = async () => {
       let course = new Course();
       let courseData:typeCourse = initialCourseData;
       courseData = await course.save(formState);

       if(courseData.id != null){
            setformState(initialCourseData);
            console.log("Saved  ")
       }
    }

    return(
        <CustomCard title="Course Details">
            <form action="">
                    <Grid container spacing={3}>
                        <Grid item md={6} sm={12}>
                            <TextField 
                            label="Course Name"
                            name="courseName"
                            value={formState.courseName}
                            onChange={(e) => handleFormElementChange(e.target.name, e.target.value)}
                            fullWidth
                            />
                        </Grid>
                        {/* <Grid item md={6} sm={12}>
                            <TextField 
                            label="Course Short Code"
                            name="shortCode"
                            value={formState.shortCode}
                            onChange={(e) => handleFormElementChange("shortCode", e.target.value)}
                            fullWidth
                            />
                        </Grid> */}
                        <Grid item md={6} sm={12}>
                            <FormControl fullWidth>
                                <InputLabel id="department">Department</InputLabel>
                                <Select
                                    labelId="department"
                                    id="department"
                                    label="Department"
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
                        
                        <Grid item md={6} sm={12}>
                            <FormControl fullWidth>
                                <InputLabel id="category">Category</InputLabel>
                                <Select
                                    labelId="category"
                                    id="category"
                                    label="Category"
                                    value={formState.category}
                                    onChange={(e) => {
                                        handleFormElementChange(e.target.name, e.target.value);
                                    }}
                                    name="category"
                                >
                                {categories.map((category) => <MenuItem value={category.id} key={category.id}>{category.categoryName}</MenuItem>)}
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
                        >Add Course</Button>
                </form>
        </CustomCard>
    );
}

export default AddCourse;