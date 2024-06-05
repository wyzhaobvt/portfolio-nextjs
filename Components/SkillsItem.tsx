import React from 'react'

interface Props{
  title:string;
  year:string;
}
export const SkillsItem = ({title,year}:Props) => {
  return (
    <div className='mb-[4rem] md:mb-[8rem]'>
      <span className='px-[2rem] text-[#55e6a5] py-[0.9rem] font-bold text-[18px] border-[2px] border-[#55e6a5]'>
        {year}
      </span>

      <h1 className='mt-[2rem] uppercase font-semibold mb-[1rem] text-[20px] sm:text-[25px] md:text-[30px] text-white'>{title}</h1>
    <p className='text-white font-normal
     w-[80%] text-[17px] opacity-80'>
            Led the deployment of AWS Greengrass for edge computing on sensor devices, ensuring seamless data processing at the edge. Implemented scalable backend infrastructure with AWS DynamoDB for efficient real-time data storage and retrieval. Collaborated on developing PeopleSenseTM sensor, enhancing real-time train data retrieval and integrating it into web applications for improved client visibility. Integrated SCADA system data into PeopleSense dashboards, enhancing monitoring capabilities.

    </p>
    </div>
  )
}
