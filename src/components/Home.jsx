function Home(){

    const [posts,setPosts] = useState(null);

    useEffect(()=>{
        
        fetch('http://localhost:3000/posts').then((res)=> {
            return res.json();
        }).then((data)=> {
            setPosts(data);
        })

    },[]);

    return(
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <h1 className="text-4xl font-bold text-gray-800">Welcome to the Home Page</h1>
            </div>
            <div>

            </div>
        </>
    );
}

export default Home;