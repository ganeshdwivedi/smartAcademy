"use client"
import React from 'react'
import CurlyArrow from './SVG/CurlyArrow'
import { AttentionSeeker, Slide } from 'react-awesome-reveal'

const AchieveYourGoal = () => {
    return (
        <div className='achieve overflow-hidden relative md:h-[250px]'>
            <CurlyArrow className={"lg:top-19 lg:left-0  md:top-16 md:-left-14 hidden md:block"} />
            <div className='flex flex-col md:flex-row relative'>
                <div className='pt-5 px-[30px] xl:px-[155px] md:z-20'>
                    <h3 className='capitalize my-2 text-white font-medium md:text-2xl text-xl'>
                        achieve your goal with
                        <p className='capitalize text-lg lg:text-xl'>smart academy</p>
                    </h3>
                    <p className='capitalize text-xs leading-5 text-white'>Lorem Ipsum is simply dummy text of the printing and type setting industry.<br className='md:block hidden' />
                        Lorem Ipsum has been the industry's standard dummy
                        <br className='md:block hidden' />
                        text ever since the 1500s. </p>
                    <AttentionSeeker effect='jello'>
                        <button className='rounded-lg animate-bounce bg-[#8708C2] px-5 py-1 text-white text-sm font-medium mb-[0.8rem] mt-5'>Register here</button>
                    </AttentionSeeker>
                </div>

                <Slide direction='right' className='md:right-0 md:w-[350px] md:h-[280px] lg:w-[420px] lg:h-[250px] lg:mr-[80px] w-full h-full static md:absolute right-20 overflow-hidden'>
                    <img className='object-cover scale-125 w-full h-full' src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*H8yObZQrXeVOMv3RE41Hiw.jpeg" alt="" />
                </Slide>
            </div>
            <div className='h-[43px] w-full md:block hidden bg-[#9C79B3]'></div>
        </div>
    )
}

export default AchieveYourGoal
