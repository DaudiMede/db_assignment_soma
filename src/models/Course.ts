import axios from "axios";
import { COURSE_URLS } from "../constants/api_urls";
import { initialCourseData } from "../constants/initial_type_data";
import { typeCourse } from "../constants/types";

class Course {

    public save = async (courseData:typeCourse):Promise<typeCourse> => {
        let course:typeCourse = initialCourseData;
        await axios.post(COURSE_URLS.CREATE, courseData)
        .then((response) => {
            if(response.status === 200 && response.data.responseCode === "0"){
                course = response.data.responseBody;
            }
        })
        .catch((error) => {

        });

        return course;
    }


    public getAll = async ():Promise<typeCourse[]> => {
        let courseList:typeCourse[] = [];
        await axios.get(COURSE_URLS.LIST)
        .then((response) => {
            if(response.status === 200 && response.data.responseCode === "0"){
                courseList = response.data.responseBody;
            }
        })
        .catch((error) => {

        });

        return courseList;
    }

    public getById = async (courseId:number):Promise<typeCourse> => {
        let course:typeCourse = initialCourseData;
        await axios.get(`${COURSE_URLS.GET} + ${courseId}`)
        .then((response) => {
            if(response.status === 200 && response.data.responseCode === "0"){
                course = response.data.responseBody;
            }
        })
        .catch((error) => {

        });

        return course;
    }

    public update = async(courseData:typeCourse, courseId:number) => {
        let course:typeCourse = initialCourseData;
        await axios.post(`${COURSE_URLS.UPDATE} + ${courseId}`)
        .then((response) => {
            if(response.status === 200 && response.data.responseCode === "0"){
                course = response.data.responseBody;
            }
        })
        .catch((error) => {

        });

        return course;
    }
}

export default Course;