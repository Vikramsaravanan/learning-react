import './App.css'
import Navbar from './Navbar.jsx'
import Course from './components/Course.jsx'
import Footer from './footer.jsx'
import physics from './assets/images/physics.jpeg';
import chemistry from './assets/images/chemistry.jpeg';
import maths from './assets/images/maths.jpeg';
import biology from './assets/images/biology.jpg';
import computer from './assets/images/computer.jpg'; 
function App() {
  return (
    <>
      {/* <Navbar /> */}
      <div className='pt-10 grid grid-cols-5'>
      <Course image={physics} name="Physics" price="499.00" rating="4.5" show={true}/>
      <Course image={chemistry} name="Chemistry" price="499.00" rating="4.8" show={true}/>
      <Course image={maths} name="Mathametics" price="499.00" rating="4.2" show={true}/>
      <Course image={biology} name="Biology" price="699.00" rating="4.6" show={true}/>
      <Course image={computer} name="Computer Science" price="699.00" rating="4.9" show={true}/>
      {/* <Footer /> */}
      </div>
    </>
    
  )
}

export default App;
