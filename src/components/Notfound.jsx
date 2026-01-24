import { Link } from 'react-router-dom';

export default function Notfound(){
    return(
        <>
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
                <h1 className="text-4xl font-bold text-gray-800">404 - Page Not Found</h1>
                <br />
                <a href="/" className="mt-4 text-red-500  transition hover:scale-105">Back to Home</a>
                <Link to="/" className="mt-4 text-blue-500 transition hover:scale-105">Go back to Home</Link>
            </div>
        </>
    );
}