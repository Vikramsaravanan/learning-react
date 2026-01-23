import './App.css'
import Navbar from './Navbar.jsx'
import Course from './components/Course.jsx'
import Footer from './footer.jsx'
import CourseList from './components/CourseList.jsx';
function App() {
  return (
    <>
      {/* <Navbar /> */}
      <div className='pt-24 pl-24 pr-24 bg-gray-100 min-h-screen'>
        <CourseList/>
      </div>
      {/* <Footer /> */}
    </>
    
  )
}

export default App;
