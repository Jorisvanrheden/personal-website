import "./Home.css"

//component imports
import NavigationBar from '../Components/NavigationBar/NavigationBar'
import Footer from '../Components/Footer/Footer'

export default function Home() {
  return (
    <div className="container">
      <div id="nav">
        <NavigationBar/>
      </div>
      <div id="main">
      </div>
      <div id="footer">
        <Footer/>
      </div>
    </div>
  );
}