import physics from '../assets/images/physics.jpeg';
import chemistry from '../assets/images/chemistry.jpeg';
import maths from '../assets/images/maths.jpeg';
import biology from '../assets/images/biology.jpg';
import computer from '../assets/images/computer.jpg'; 
import Course from './Course.jsx';

export default function CourseList() {

    const courses = [
        { id: 1,image:physics, name: "Physics", price:499.00 , rating: "4.5", show: true },
        { id: 3,image:chemistry, name: "Chemistry", price:499.00 , rating: "4.8", show: true },
        { id: 2,image:maths, name:"Mathematics", price:499.00 , rating: "4.2", show: true },
        { id: 4,image:biology, name: "Biology", price:699.00 , rating: "4.6", show: true },
        { id: 5,image:computer, name: "Computer Science", price:699.00 , rating: "4.9", show: true }
    ];

    // courses.sort((x,y) => (x.name ?? "").toLowerCase().localeCompare((y.name ?? "").toLowerCase()));
    courses.sort((x,y) => x.rating-y.rating);
    const courseslist = courses.map(
        (course,index)=> <Course key={index} image={course.image} name={course.name} price={course.price} rating={course.rating} show={course.show}/>)
    
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