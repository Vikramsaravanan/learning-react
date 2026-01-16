import styles from './course.module.css';
import "../index.css";

import im from '../assets/images/coming-soon.jpg';
const course1 = "This is course 1";

function Course({image=im,name,price="00.00",rating="0",show=false}) {

    function purchase(discount){
        console.log("Purchased "+name+" for $"+(price-(discount*price)/100));
    }

    if(show){
     return(
        name && <div className='card'>
            <img src={image} alt="" />
            <h3>{name}</h3>
            {/* <p>This is Markiv's {props.name} course</p> */}
            <p>${price}</p>
            <p>{rating}</p>
            <button onClick={(e)=>{{purchase(20)}; console.log(e)}} className="mt-3 bg-green-600 text-white px-4 py-2 rounded hover:bg-blue-700">  Buy Now </button>
        </div> 
     );
    }
    else{
        image=im;
        return(
            <> 
                <div className="card">
                    <img src={image}></img>
                    <p className="pt-6">Course time ends</p>
                </div>
            </>
        )
    }
}

// Course.propTypes= {
//     name: String,
//     price: String,
//     rating: String,
//     show: Boolean
// }

export default Course;