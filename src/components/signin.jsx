function Signin(){
    return(
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <form className="bg-white p-6 rounded-lg shadow-md w-[320px] space-y-4">
                    <h2 className="text-xl font-semibold text-center">Signin</h2>
                    
                    <label htmlFor="sin-email" className="block text-sm mb-1">Email </label>
                    <input type="email" autoComplete="off" placeholder="example@gmail.com" id="sin-email"  className="w-full h-[40px] border rounded px-3 outline-none focus:ring-2 focus:ring-blue-400"/>
                    <br />
                    <label htmlFor="sin-password" className="block text-sm mb-1">Password </label>
                    <input type="password" autoComplete="new-password" placeholder="Enter your password" id="sin-password"  className="w-full h-[40px] border rounded px-3 outline-none focus:ring-2 focus:ring-blue-400"/>
                    <br />
                    
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">Signin</button>
                </form>
            </div>
        </>
    );
}

export default Signin;