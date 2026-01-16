import './App.css'
import Navbar from './Navbar.jsx'
import Course from './components/Course.jsx'
import Footer from './footer.jsx'
import CourseList from './components/CourseList.jsx';
function App() {
  return (
    <>
      {/* <Navbar /> */}
      <div className='pt-10 grid grid-cols-5'>
        <CourseList/>
      {/* <Footer /> */}
      </div>
    </>
    
  )
}

export default App;
