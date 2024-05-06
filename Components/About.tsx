import { ArrowDownTrayIcon } from "@heroicons/react/16/solid";
import styles from './About.module.css';
import Image from "next/image";
import React from "react";
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faNode,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export const About = () => {
  return (
    <div className="bg-[#121121] pb-[3rem] pt-[4rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
        <div>
          {/* <h1 className='text-[20px] font-bold uppercase text-[#55e6a5] mb-[1rem]'>
    ABOUT ME
</h1> */}
          <h2 className="text-[25px] mb-0 md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize  font-bold text-white">
            About <span className="text-yellow-400">Me</span>
          </h2>
          <div className="mb-[3rem] md:spce-x-10">
            <div className="w-[100px] mb-[3rem] hidden md:block h-[5px] bg-slate-400 rounded-sm"></div>
            <p className="text-[19px] text-slate-300 w-[80%]">
              I am a Full-Stack developer based in Bay Area in California. With
              a degree in biochemistry, I made a career pivot into computer
              science, embracing the challenges with a growth mindset. 
            </p>
            <p className="text-[19px] text-slate-300 w-[80%] mt-[20px]">
            As a Full Stack Developer, my journey has been about continuous
              learning and self-motivation. I find satisfaction in solving
              problems, especially in the world of debugging. My unique
              background has equipped me with adaptability and resilience,
              essential qualities in the dynamic field of software development.
            </p>
           
          </div>
          <button className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2">
            <p>Download Resume</p>
            <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
          </button>
        </div>
        {/* <div className="lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative">
          <Image
            src="/images/about.jpg"
            alt="user"
            layout="fill"
            objectFit="contain"
            className="relative z-[11] w-[100%] h-[100%] object-contain"
          ></Image>
          <div className="absolute w-[100%] h-[100%] z-[10] bg-[#55e6a5] top-[-2rem] right-[-2rem]"></div>
        </div> */}
       <div className="lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 w-[300px] h-[300px] flex justify-center items-center relative"> {/* Add relative positioning */}
  <div className="absolute" style={{ left: 'calc(50% - 50px)', top: 'calc(50% - 100px)' }}> {/* Use calc() for positioning */}
          <div className={styles.stageCubeCont}>
            <div className={styles.cubespinner}>
              <div className={styles.face1}>
                <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
              </div>
              <div className={styles.face2}>
                <FontAwesomeIcon icon={faHtml5} color='#F06529' />
              </div>
              <div className={styles.face3}>
                <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
              </div>
              <div className={styles.face4}>
                <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
              </div>
              <div className={styles.face5}>
                <FontAwesomeIcon icon={faNode} color='#509941' />
              </div>
              <div className={styles.face6}>
                <FontAwesomeIcon icon={faGitAlt} color='#EC4D28' />
              </div>
            </div>
          </div>
          </div>
        </div>
        </div>
      </div>
      );
};
