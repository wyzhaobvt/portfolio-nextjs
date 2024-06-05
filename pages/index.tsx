import { About } from "@/Components/About";
import { Footer } from "@/Components/Footer";
import { Hero } from "@/Components/Hero";
import { MobileNav } from "@/Components/MobileNav";
import Nav from "@/Components/Nav";
import { Projects } from "@/Components/Projects";
import { Skils } from "@/Components/Skils";
import React, { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { Education } from "@/Components/Education";
interface Event {
  heading: string;
  subHeading: string;
  time: string;
  company: string;
  direction: 'left' | 'right'; // Specify the direction property with the correct union type
  skills: string[];
}

const HomePage = () => {
  const [nav,setNav] = useState(false)
  const openNav = () =>{setNav(true)}
  const closeNav = ()=>setNav(false)

  useEffect(()=>{
    AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});
  })
  const events: Event[] = [
    {
        heading:'Software Developer',
        subHeading:`Led the deployment of AWS Greengrass for edge computing on sensor devices, ensuring seamless data processing at the edge. Implemented scalable backend infrastructure with <strong style={{ color: '#55e6a5' }}>AWS DynamoDB</strong> for efficient real-time data storage and retrieval.\n Collaborated on developing PeopleSenseTM sensor, enhancing real-time train data retrieval and integrating it into web applications for improved client visibility. Integrated SCADA system data into PeopleSense dashboards, enhancing monitoring capabilities.`,
        time:'01/2024-Present',
        company:'Glocol Networks',
        direction:'right',
        skills:['TyperScript','AWS']
    },
    {
        heading:'Software Developer',
        subHeading:'Developed and collaborated on full-stack projects, leveraging HTML, CSS, JavaScript, React.js, MySQL, and Node.js. Managed team-based projects following agile methodologies. Conducted thorough code reviews, enhancing code quality and project efficiency. Played a key role in troubleshooting and resolving software issues, ensuring project success. Committed to ongoing learning and skill development in a fast-paced, team-oriented setting.',
        time:'04/2023-Present',
        company:'Glocol Networks',
        direction:'left',
        skills:['TyperScript','AWS']
    },
    {
      heading:'Software Developer',
      subHeading:`Led the deployment of AWS Greengrass for edge computing on sensor devices, ensuring seamless data processing at the edge. Implemented scalable backend infrastructure with AWS DynamoDB for efficient real-time data storage and retrieval. Collaborated on developing PeopleSenseTM sensor, enhancing real-time train data retrieval and integrating it into web applications for improved client visibility. Integrated SCADA system data into PeopleSense dashboards, enhancing monitoring capabilities.`,
      time:'01/2024-Present',
      company:'Glocol Networks',
      direction:'right',
      skills:['TyperScript','AWS']
  },
  {
      heading:'Software Developer',
      subHeading:'Developed and collaborated on full-stack projects, leveraging HTML, CSS, JavaScript, React.js, MySQL, and Node.js. Managed team-based projects following agile methodologies. Conducted thorough code reviews, enhancing code quality and project efficiency. Played a key role in troubleshooting and resolving software issues, ensuring project success. Committed to ongoing learning and skill development in a fast-paced, team-oriented setting.',
      time:'04/2023-Present',
      company:'Glocol Networks',
      direction:'left',
      skills:['TyperScript','AWS']
  },

]
  return ( <div className="overflow-x-hidden">
    <div>
      {/*Navbar*/}
      <MobileNav nav={nav} closeNav={closeNav}/>
      <Nav openNav={openNav}/>
      <Hero/>
      <div className="relative z-[30]">
        <About/>
        <Skils/>
        <Projects/>
        <Education events={events}/>
        <Footer/>
      </div>
      </div>
  </div>
  )
};

export default HomePage;
