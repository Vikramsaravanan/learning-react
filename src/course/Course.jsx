import styles from './course.module.css';

import im from '../assets/AWS.jpg';
const course1 = "AWS";

function Course({image=im,name="def",price="99.00",rating="4.5",show=false}) {
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
        return(
            <>
                <div className="card">Course time ends</div>
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