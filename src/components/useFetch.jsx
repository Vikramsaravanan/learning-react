import { useEffect,useState } from 'react';

const useFetch = (url) =>{

    const [courses,setCourses] = useState(null);
    const [error,setError] = useState(null);
    const[dummy,setDummy] = useState(true);
    

    useEffect(()=>{
        // console.log("useEffect called--------------> Effect");
        setTimeout(()=>{
            fetch(url)
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

    return ([courses,dummy,error]);
}

export default useFetch;