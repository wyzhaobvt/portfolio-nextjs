import React, { useState } from 'react'
interface Event {
    heading: string;
    subHeading: string;
    time: string;
    company: string;
    direction: 'left' | 'right';
    skills: string[];
  }
  
  interface EducationProps {
    events: Event[];
  }
  
  interface EventCardProps {
    direction: 'left' | 'right';
    heading: string;
    subHeading: string;
    time: string;
    company: string;
    skills: string[];
  }
  
  interface HoverEventCardProps {
    heading: string;
    subHeading: string;
    time: string;
    company: string;
  }
  
  export const Education: React.FC<EducationProps> = ({ events }) => {
    return (
        <>
            <div className='flex flex-col my-4 w-full bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem] '>
                {/* <div className='flex flex-col gap-y-3 w-full'> */}
                <Circle />
                {
                    events.map((event, key) => {
                        return <div key={key}>
                            <div className='grid grid-cols-[1fr_auto_1fr] gap-x-2 items-center mx-auto'>
                                {
                                    event.direction === 'left' ? (
                                        <EventCard direction={event.direction} heading={event.heading} subHeading={event.subHeading} time={event.time} company={event.company} skills={event.skills} />
                                    ) : (
                                        <div>
                                        </div>
                                    )
                                }
                                <Pillar />
                                {
                                    event.direction === 'right' ? (
                                        <EventCard direction={event.direction} heading={event.heading} subHeading={event.subHeading} time={event.time} company={event.company} skills={event.skills} />                                    ) :
                                        (
                                            <div></div>
                                        )
                                }
                            </div>
                            {
                                key < (events.length - 1) && <Circle />
                            }
                        </div>
                    })
                }
                <Circle />
            </div>
        </>
    )
}


const Circle: React.FC = () => {
    return <div className='rounded-full w-4 h-4 bg-blue-500 mx-auto'></div>;
  };
  
  const Pillar: React.FC = () => {
    return <div className='rounded-t-full rounded-b-full w-2 h-full bg-blue-500 mx-auto'></div>;
  };
  

  const EventCard: React.FC<EventCardProps> = ({
    direction,
    heading,
    subHeading,
    time,
    company,
    skills,
  }) => {    const [isHover, setIsHover] = useState(false)
    return (
        <div className={`flex flex-col gap-y-2 shadow-md p-4 ${direction==='left'?'items-end':'items-start'}`} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
            {
                isHover ?
                    <div className='w-[80%] p-[20px] rounded-md bg-white bg-opacity-5 '>
                        <div className='text-white font-bold text-[25px] border-b'>
                            {heading}
                        </div>
                        <div className='text-[#aaaaaa] font-normal
text-[17px] opacity-80 mt-[10px] text-justify'>
                            {subHeading.split('\n').map((line, index) => (
                               <p key={index} dangerouslySetInnerHTML={{ __html: line }} />
                            ))}
                        </div>
                    </div>
                    :
                    <div className='w-[80%] p-[20px] rounded-md bg-white bg-opacity-5'>
                        <div className='text-white font-bold text-[25px]'>
                            {heading}
                        </div>
                        <div className='flex justify-between'>
                        <div className='text-yellow-300 font-bold text-[25px]'>
                            {company}
                        </div>
                        <div className='text-[#aaaaaa] text-[20px]'>
                            {time}
                        </div>
                        </div>
                        <div  className='text-[#aaaaaa] text-[20px] flex mt-3'>
                            {
                                skills.map((item,index)=>(
                                    <div key={index} className='mx-1'>
                                        <button className='text-[#55e6a5] text-[15px] py-1 px-3 rounded-full bg-[#55e6a5] bg-opacity-20'>{item}</button>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

            }
        </div>
    )
}

const HoverEventCard: React.FC<HoverEventCardProps> = ({
    heading,
    subHeading,
    time,
    company,
  }) => {    const [isHover, setIsHover] = useState(false)
    return (
        <div className='flex flex-col gap-y-2 shadow-md p-4 ' onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
            {
                isHover ?
                    <div className='w-[80%] p-[20px] rounded-md bg-white bg-opacity-5 '>
                        <div className='text-white font-bold text-[25px] border-b'>
                            {heading}
                        </div>
                        <div className='text-[#aaaaaa] font-normal
text-[17px] opacity-80 mt-[10px] text-justify'>
                            {subHeading.split('\n').map((line, index) => (
                                <p key={index}>{line}</p>
                            ))}
                        </div>
                    </div>
                    :
                    <div className='w-[80%] p-[20px] rounded-md bg-white bg-opacity-5'>
                        <div className='text-white font-bold text-[25px] border-b'>
                            {heading}
                        </div>
                        <div className='text-[#aaaaaa] font-normal
text-[17px] opacity-80 mt-[10px] text-justify'>
                            <p>{time}</p>
                        </div>
                    </div>

            }
        </div>
    )
}