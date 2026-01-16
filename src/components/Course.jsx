import styles from './course.module.css';
import "../index.css";

import im from '../assets/images/coming-soon.jpg';
const course1 = "This is course 1";

function Course({image=im,name="coming-soon",price="00.00",rating="0",show=false}) {
    if(show){
     return(
        <div className='card'>
            <img src={image} alt="" />
            <h3>{name}</h3>
            {/* <p>This is Markiv's {props.name} course</p> */}
            <p>${price}</p>
            <span>{rating}</span>
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

Course.propTypes= {
    name: String,
    price: String,
    rating: String,
    show: Boolean
}

export default Course;