import { useState } from "react";

function Signup(){

    const[pwd1,setPwd1] = useState("");
    const[pwd2,setPwd2] = useState("");
    const[same,setSame] = useState(true);

    function handlePwd1Change(eve){
        setPwd1(eve.target.value);
    }
    function handlePwd2Change(eve){
        setPwd2(eve.target.value);

        if(pwd1 == eve.target.value){
            console.log("Passwords match");
            setSame(true);
        }
        else{
            console.log("Passwords do not match");
            setSame(false);
        }
    }

    return(

        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
    
                <form className="bg-white p-6 rounded-lg shadow-md w-[320px] space-y-4">

                    <h2 className="text-xl font-semibold text-center">Signup</h2>

                    <label htmlFor="name" className="block text-sm mb-1">Name </label>
                    <input 
                        type="text" 
                        placeholder="first_name + last_name" 
                        id="name" 
                        className="w-full h-[40px] border rounded px-3 outline-none focus:ring-2 focus:ring-blue-400"/>
                    <br />
                    
                    <label htmlFor="email" className="block text-sm mb-1">Email </label>
                    <input 
                        type="email" 
                        autoComplete="off" 
                        placeholder="example@gmail.com" 
                        id="email" 
                        className="w-full h-[40px] border rounded px-3 outline-none focus:ring-2 focus:ring-blue-400"/>
                    <br />
                    
                    <label htmlFor="password" className="block text-sm mb-1">Password </label>
                    <input 
                        type="password" 
                        autoComplete="new-password" 
                        placeholder="Enter your password" 
                        id="password" 
                        value={pwd1}
                        onChange={handlePwd1Change}
                        className="w-full h-[40px] border rounded px-3 outline-none focus:ring-2 focus:ring-blue-400"/>
                    <br />
                    
                    <label htmlFor="re-password" className="block text-sm mb-1">Re-enter Password </label>
                    <input 
                        type="password" 
                        placeholder="Re-enter your password" 
                        id="re-password"
                        value={pwd2} 
                        onChange={handlePwd2Change}
                        className="w-full h-[40px] border rounded px-3 outline-none focus:ring-2 focus:ring-blue-400"/>
                    <br />

                    <input 
                        type="checkbox" 
                        name="agree" 
                        id="i_agree"  
                        // onChange={handlePwdCheck}
                        className="accent-blue-500 mr-2 cursor-pointer"/>
                    <label htmlFor="i_agree" className="text-sm cursor-pointer">I agree </label> 
                    <br />   
                    {!same && <p className="text-red-600">Password Not Same</p>}
                    <button 
                        type="submit" 
                        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">Signup</button>
                    
                    <p>Already have a account? 
                        <span>Signin</span>
                    </p>
                
                </form>

            </div>

        </>
        
    );
}

export default Signup;