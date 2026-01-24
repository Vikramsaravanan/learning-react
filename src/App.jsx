import './App.css'
import Home from './components/Home.jsx';
import Signup from './components/signup.jsx';
import Signin from './components/signin.jsx';
import Navbar from './Navbar.jsx'
import Course from './components/Course.jsx'
import CourseList from './components/CourseList.jsx';
import Footer from './footer.jsx'
import Notfound from './components/Notfound.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'; 


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Notfound />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/signin',
    element: <Signin />
  },
  {
    path: '/courses',
    element: <CourseList />
  }
]);

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <RouterProvider router={router}/>
      {/* <Signup />
      <Signin />
      <CourseList/> */}
      {/* <Footer /> */}
    </>
    
  )
}

export default App;
