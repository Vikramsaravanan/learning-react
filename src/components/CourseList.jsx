import Course from './Course.jsx';
import useFetch from './useFetch.jsx';

export default function CourseList(){

    const [courses,dummy,error] = useFetch('http://localhost:3000/courses');

    // courses.sort((x,y) => (x.name ?? "").toLowerCase().localeCompare((y.name ?? "").toLowerCase()));
    // courses.sort((x,y) => x.rating-y.rating);

    if(!courses){
        return (
            <>
                {!error && <img className="ml-[250px] h-[600px] w-[890px]" src="data\assets\gif\loading.gif" alt="Loading Courses...!"/>}
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
            <div className='pt-24 pl-24 pr-24 bg-gray-100 min-h-screen'>
                {courseslist}
            </div>
            </>
        );
}