import "../index.css";
import im from '../assets/images/coming-soon.jpg';
import { useEffect,useState } from 'react';

const course1 = "This is course 1";

function Course({image=im,name,price="00.00",rating="0"}) {

    let disc = true;
    const [purchased,setPurchased] = useState(false);
    const [show,setShow] = useState(true);
    
    const[discount,setDiscount] = useState("Apply 10% Discount");
    const[final_price,setFinal_price] = useState(price);
    function applyDiscount(m){
        if(disc){
            const newprice = price - (m*price)/100;
            setFinal_price(newprice);
            setDiscount("Discount Applied");
            disc = false;
            console.log("price updated");
        }
        else{
            console.log("Summa summa laam nonda kudaathu");
        }
        
    }
    
    //  This is a sample code for fetching data from an API using useEffect
    useEffect(()=>{
        // console.log("useEffect called--------------> Effect");

        fetch('http://localhost:3000/courses')
        .then(response => {
            console.log(response);
            return response.json();
        }).then(data => {
            console.log(data);
        });
    },[]);
    // End of sample code


    // useEffect(()=>{
    //     console.log("purchase updated---->Effect");
    // },[purchased]);

    // useEffect(()=>{
    //     console.log("Discount button clicked---->Effect");
    // },[discount]);

    // useEffect(()=>{
    //     console.log("Final price updated---->Effect");
    // },[final_price]);

    // useEffect(()=>{
    //     console.log("Item deleted---->Effect");
    // },[show]);
    
    function purchase(discount){
        
        if(purchased)
            console.log("summa idhayae aluthaama vera veliya paaru!");
        else{
            console.log("Purchased "+name+" for $"+(final_price));
            console.log("Order potaachu");
        }
        setPurchased(true);
    }

    function handleDelete(){
        console.log("Delete "+name);
        setShow(false);
    }
    
    if(show){
     return(
        name && <div className='card'>
            <img src={image} alt="" />
            <h3>{name}</h3>
            {/* <p>This is Markiv's {props.name} course</p> */}
            <p>${final_price}</p>
            <p>{rating}</p>
            <button onClick={(e)=>{{purchase(20)}}} className={`mt-3 px-4 py-2 rounded text-white ${purchased? "bg-gray-500" : "bg-green-600 hover:bg-blue-700"}`}>  Buy Now </button>
            <button onClick={(p) => {{applyDiscount(20)}}} className={`mt-3 px-4 py-2 rounded ${(discount=="Already purchased")? "bg-gray-500" : "bg-green-600 hover:bg-blue-700"}`}>{discount}</button>
            <p>{purchased ? "Already purchased":"Get it Now"}</p>
            <button onClick={handleDelete} className="mt-3 bg-pink-600 text-white px-4 py-2 rounded-full hover:bg-red-700">X</button>
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

export default Course;