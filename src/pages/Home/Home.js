import React from 'react'
import Logo from '../../components/logo/Logo';
import './home.scss'
import ShapeOne from '../../components/design/shapes/ShapeOne';
import ShapeTwo from '../../components/design/shapes/ShapeTwo';
import ShapeThree from '../../components/design/shapes/ShapeThree';
import ShapeFour from '../../components/design/shapes/ShapeFour';


const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="logo-wrapper">
        <Logo /><h1>Wägar</h1>
      </div>
     
      <section className="home-section-top">
        <h2>
          A creative <b>Frontend developer</b>, with some <br />
          <small>backend knowledge</small> and then some.<br />
          Based in Stockholm, Sweden <br />
          My goal is to make things easier for you,<br />
          by solving your problems with <b>creative</b> solutions
        
        </h2>
      </section>
    </div>
   );
}
 
export default Home;