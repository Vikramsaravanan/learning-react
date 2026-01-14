import './App.css'
import Navbar from './Navbar.jsx'
import Course from './course/Course.jsx'
import Footer from './footer.jsx'
import AWS from './assets/AWS.jpg'
import HTML from './assets/Freedom.png'
function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Course image={AWS} name="AWS" price="199.00" rating="4" show={true}/>
      <Course image={HTML} name="HTML" price="299.00" show={true}/>
      <Course name="Hello" show={false}/>
      {/* <Footer /> */}
    </>
    
  )
}

export default App;
