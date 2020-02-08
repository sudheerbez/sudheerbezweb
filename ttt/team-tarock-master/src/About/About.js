import React from "react";
import "./About.scss";
import about1 from "../images/about1.png";
import about2 from "../images/about2.png";
import about3 from "../images/about3.png";
import OurTeam from "./OurTeam";

export const AboutTemplate = () => {

  return (
    <>
    <div className="wrapper">
      <article>
        <div ></div>
        <section>
          <h1> About our team </h1>
          <p>
           Team Tarak is a friendly fraternity of NTR fans who are committed to make a difference. Our mission is to make a positive difference in the lives of the homeless, hungry, mentally ill and needy. Come Join Us. Keep an eye out for our next event and lets put a smile on some more faces together.
           <h4 style={{paddingTop: '35px'}}>
           <span style={{backgroundColor: 'yellow'}}>"आ त्मवत् मन्येत् जगत्"</span>
           <br/>
           <br/>
           <span style={{backgroundColor: 'yellow'}}>"Consider the world like your own self."</span>
           </h4> 
          </p>
          </section>
      </article>
      
      <article className="threeColumns">
        <section className="row">
          <div className="four columns">
            <img src={about1} alt="We prove project"/>
            <h6>We prove every project</h6>
            <p>
              We track every rupee you raise, and show the projects you helped fund with photos and GPS. We are also plannning to display all details of our financials here in the website. That gives a transparency of the money spent.
            </p>
            <a href="/pastevents">See Our Past Events</a>
          </div>

          <div className="four columns">
            <img src={about2} alt="Open book"/>
            <h6>We’re an open book</h6>
            <p>
              We are always available and transparent. Text us (+91-9949087777) anytime if you have a question. We welcome you with open arms and with extreme happiness.
            </p>
            <a href="/analytics">VIEW ALL FINANCIALS</a>
          </div>

          <div className="four columns">
            <img src={about3} alt="100%"/>
            <h6>100% goes to the field</h6>
            <p>
              Private donors cover our operating costs so 100% of your money goes to charity. However, it takes time to learn and manage funding. So the maximum amount you can donate is 100 INR. If you are funding from overseas the maximum amount is 20 USD.
            </p>
            <a href="#">LEARN HOW IT WORKS</a>
          </div>
        </section>
      </article>

      <br/>
      <hr className="hrStyle"/>
      <OurTeam/>


      <footer>
        <section className="firstSectionFooter">
          <br/>
          <a href="#">To Tarak With ❤️ : lkanagal</a> 
          <br/>
        </section>
      </footer>

    </div>   
    </>
  );
};

const About = () => {
  return <AboutTemplate/>;
};

export default About;
