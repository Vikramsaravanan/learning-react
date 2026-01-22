import Course from './Course.jsx';
import { useEffect,useState } from 'react';

export default function CourseList(){

    const [courses,setCourses] = useState(null);
    const [error,setError] = useState(null);
    const[dummy,setDummy] = useState(true);
    useEffect(()=>{
        // console.log("useEffect called--------------> Effect");
        setTimeout(()=>{
            fetch('http://localhost:3000/courses')
            .then(response => {
                if(!response.ok){
                    throw Error("Couldn't retrieve courses");
                }
                console.log(response);
                return response.json()
            }).then(data => setCourses(data)).catch((error)=>{
                console.log(error.message);
                setError(error.message);
            })
        },2600);
    },[]);

    // courses.sort((x,y) => (x.name ?? "").toLowerCase().localeCompare((y.name ?? "").toLowerCase()));
    // courses.sort((x,y) => x.rating-y.rating);

    if(!courses){
        return (
            <>
                {!error && <img className="pl-60" src="data\assets\gif\loading.gif" alt="Loading Courses...!"/>}
                {error && <p className='flex justify-center items-center'>{error}</p>}
            </>
        );
    }

    const courseslist = courses.map((course)=> 
        <Course  
            key={course.id} 
            image={course.image} 
            name={course.name} 
            price={course.price} 
            rating={course.rating} 
            show={course.show} 
        />)
    
    
        return (
            <>
            {courseslist}
            </>
        );
}