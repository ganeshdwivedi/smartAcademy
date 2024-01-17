"use client"
import React from 'react'
import RectangleSvg from './SVG/RectangleSvg'
import RobotSvg from './SVG/RobotSvg'
import Person from './SVG/GetToKnow/Person'
import Book from './SVG/GetToKnow/Book'
import Student from './SVG/GetToKnow/Student'
import VideoSvg from './SVG/VideoSvg'
import DiamondRub from './SVG/DiamondRub'
import { Slide } from 'react-awesome-reveal'

const GetToKnow = () => {
    return (
        <div className='flex lg:flex-row overflow-hidden lg:items-start items-center justify-center px-[30px] pt-14 flex-col  lg:m-0  lg:pt-[159px] xl:px-[200px]'>

            <div className='md:px-10 relative'>
                <RectangleSvg className={"-top-10 -left-10"} />
                <h3 className='text-sm my-2 font-bold text-purple-700'>
                    Get to know about us
                </h3>
                <h3 className='capitalize text-[#333333] text-2xl md:text-[30px] lg:text:[32px] xl:text-[34px] leading-9 font-extrabold'>Discover Top instructors around the world</h3>
                <p className='text-[#666666] font-sans capitalize my-2 text-[14px]'>Explore global experts who are leading in their fields, offering
                    unparalleled knowledge and guidance as top <br className='md:hidden lg:block' />
                    instructors from every corner of the world.</p>
                <div className='grid grid-cols-2 gap-x-3 gap-y-10 my-5'>

                    <div className='flex flex-row items-center relative'>
                        <Person />
                        <DiamondRub color={"#DBDBDB"} className={"-left-2 md:top-0 top-2 "} />
                        <div className='mx-5'>
                            <p className='font-bold'>12,500</p>
                            <p className='text-sm'>Expert Tutors</p>
                        </div>
                    </div>

                    <div className='flex flex-row items-center relative'>
                        <Book />
                        <DiamondRub color={"#F0B5CB"} className={"-left-2 md:top-0 top-2 "} />
                        <div className='mx-5'>
                            <p className='font-bold'>100k+</p>
                            <p className='text-sm'>Top Lessons</p>
                        </div>
                    </div>

                    <div className='flex flex-row items-center relative'>
                        <Student />
                        <DiamondRub color={"#96A5C3"} className={"-left-2 md:top-0 top-2 "} />
                        <div className='mx-5'>
                            <p className='font-bold'>56,556+</p>
                            <p className='text-sm'>Over Students</p>
                        </div>
                    </div>

                    <div className='flex flex-row items-center relative'>
                        <VideoSvg />
                        <DiamondRub color={"#9AAEDF"} className={"-left-2 md:top-0 top-2 "} />
                        <div className='mx-5'>
                            <p className='font-bold'>23,890</p>
                            <p className='text-sm'>Pro Videos</p>
                        </div>
                    </div>
                    <button className='bg-[#8708C2] text-white py-2 w-[130px] rounded-[25px] font-medium text-sm'>Explore More</button>
                </div>
            </div>
            <Slide direction='right' triggerOnce={true}>
                <div className='mt-5 mx-20 flex-row flex gap-2 relative'>
                    <RobotSvg className={"md:bottom-[18rem] md:-left-10 lg:left-0 -top-14 -left-10"} />
                    <div className='flex flex-col gap-2 relative'>
                        <div className='w-[25vw] md:w-[140px] md:h-[120px]'>
                            <img className='w-full object-cover h-full rounded-tl-2xl' src='https://www.ecomatrixesg.com/cep-institute_files/61ebc48a8c88d264d2e42edc_training-img.jpg' alt='' />
                        </div>
                        <div className=' w-[25vw] h-[25vw] md:w-[145px] md:h-[145px]'>
                            <img className='w-full h-full object-cover' src='https://cdn.akamai.steamstatic.com/steamcommunity/public/images/clans/12632797/36a3cb28a9ebc08e4e01de5e307aa310535d4d27.gif' />
                        </div>
                        <div className='w-[50vw] h-[25vw] md:w-[300px] md:h-[90px]'> <img className='w-full h-full rounded-bl-2xl object-top object-cover' src="https://optocrypto.com/wp-content/uploads/2018/03/gear-vr-4D.jpg" /></div>

                    </div>
                    <div className='flex flex-col gap-2 absolute left-[34.5%] md:left-[9.5rem]'>
                        <div className='w-[24vw] md:w-[150px] md:h-[90px]'>
                            <img className='w-40 h-full' src='https://miro.medium.com/v2/resize:fit:720/format:webp/1*An4d5dB66hCW5yjOqm_lQA.jpeg' alt='' />
                        </div>
                        <div className='w-[24vw] h-[28vw] md:w-[150px] md:h-[175px]'>
                            <img className='w-full object-cover h-full' src='https://cdn01.alison-static.net/courses/5593/alison_courseware_intro_5593.jpg' alt='' />
                        </div>

                    </div>

                    <div className='flex flex-col gap-2'>
                        <div className='w-[25vw] md:w-[115px] md:h-[110px]'>
                            <img className='w-full h-full object-cover rounded-tr-2xl' src='https://www.drink-it.com/Admin/Public/GetImage.ashx?Image=/Files/Images/NORRIQ_BE/blog/ALBlog.jpg&Width=1340&Crop=5&Compression=90' alt='' />
                        </div>
                        <div className=' w-[25vw] h-[36vw] md:w-[115px] md:h-[155px]'>
                            <img className='w-full object-cover h-full' src='https://digital-preacher.com/wp-content/uploads/2023/01/man-wearing-vr-glasses-with-blue-purple-light-1022x1536.jpg.webp' alt='' />
                        </div>
                        <div className=' w-[25vw] md:w-[115px] md:h-[90px]'>
                            <img className='object-cover rounded-br-2xl  w-full h-full' src="https://i.pinimg.com/originals/ab/52/69/ab526924acfa42edad1c62ead07dae96.gif" />
                        </div>
                    </div>
                    <RectangleSvg className={"-bottom-10 -right-32"} />
                </div>
            </Slide>
        </div>
    )
}


export default GetToKnow
