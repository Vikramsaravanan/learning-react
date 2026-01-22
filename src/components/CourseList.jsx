import Course from './Course.jsx';
import { useEffect,useState } from 'react';

export default function CourseList() {

    const [courses,setCourses] = useState(null);

    const[dummy,setDummy] = useState(true);
    useEffect(()=>{
        // console.log("useEffect called--------------> Effect");

        fetch('http://localhost:3000/courses')
        .then(response => {
            return response.json()
        }).then(data => setCourses(data));
    },[]);

    // courses.sort((x,y) => (x.name ?? "").toLowerCase().localeCompare((y.name ?? "").toLowerCase()));
    // courses.sort((x,y) => x.rating-y.rating);

    if(!courses){
        return <h2>Loading Courses....</h2>;
    }
    const courseslist = courses.map(
        (course)=> <Course key={course.id} image={course.image} name={course.name} price={course.price} rating={course.rating} show={course.show} />)
    
    const basics = courses.filter((course) => course.price==499.00); 
    const basicscourse = basics.map(
        (course,index)=> <Course key={index} image={course.image} name={course.name} price={course.price} rating={course.rating} show={course.show}/>)
    
    const addedcourse = courses.filter((course) => course.price!=499.00);
    const addedcourseslist = addedcourse.map(
        (course,index)=> <Course key={index} image={course.image} name={course.name} price={course.price} rating={course.rating} show={course.show}/>)
    
        return courseslist;
    // return basicscourse;
    // return addedcourseslist;
}