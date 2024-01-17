import React from 'react'
import InstructorCard from './InstructorCard';

const LearnFromInstructor = () => {
    return (
        <div className='bg-[#1C1C1C] py-[30px] lg:py-[70px] lg:items-start flex flex-col px-[30px] xl:px-[155px]'>
            <div>
                <h3 className='capitalize font-bold text-base lg:text-[24px] my-2 text-white'>Learn from the best instructors</h3>
                <p className='lg:text-[15px] leading-6 text-xs text-white'>Learn From the best instructors to gain insight,Master skills, and excel in your endeavors. Their<br className='lg:block hidden' /> expertise accelerates your progress.</p>

            </div>
            <div className='my-10 grid grid-cols-2 xl:gap-x-[35px] lg:grid-cols-4 lg:gap-x-[40px] md:gap-x-[20vw] gap-[30px] md:gap-y-[40px]'>

                <InstructorCard imgsrc={"https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"} text={"Michale"} />
                <InstructorCard imgsrc={"https://img.freepik.com/free-photo/attractive-young-man-is-relaxing-home_132075-8943.jpg?w=360&t=st=1705510815~exp=1705511415~hmac=03e539218184be24382a43f81fdbf9e6af5ca0420aaa50d4623a70bbfc791fa2"} text={"Tony Danza"} />
                <InstructorCard imgsrc={"https://miro.medium.com/v2/resize:fit:720/format:webp/0*HKUTbRj3ry8GFKti.png"} text={"Rick Wright"} />
                <InstructorCard imgsrc={"https://img.freepik.com/free-photo/person-indian-origin-having-fun_23-2150285283.jpg?w=360&t=st=1705510915~exp=1705511515~hmac=86ddd42712141615ce0d8a355303b46adb4b541b3f9d80cd251f5e98a436f032"} text={"Kate Tanner"} />
            </div>
        </div >
    )
}

export default LearnFromInstructor
