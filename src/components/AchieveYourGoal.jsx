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
                    <img className='object-cover scale-125 w-full h-full' src="https://s3-alpha-sig.figma.com/img/10e6/c3a2/5f176190c0fb5eee418376914b148a0a?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QIF6uFkNVNav-fBpRJbKTRuTm5oIKlyPhxwBriv73tk473cH3i8jlmD8lJab-uQ~rye-oHKvRdrDKFWNyQR432MNNd52rf~0QaR0E2zl1nGe5~D5ppAzlu2aRRj8PBnDUtpVDJKCf6UA9xZ7nApNdmw~5bYMN85H~DZFYsRMczxeC5AtOy-UCOk6vGdwy1g9CucstiC2DlNW6gOl9Hks72ZNnPKwRUMdlWhYOCyQ4kOJXf1mXwmZtVyXBLnTtgQJZR~cm-J9e0O6~TxYEViW7ohWULgnP~OGlThZhurKo15jrH9bhYQPy-lvZuoiJxDc-4t4Ibqso-f1C5pQW-sJTw__" alt="" />
                </Slide>
            </div>
            <div className='h-[43px] w-full md:block hidden bg-[#9C79B3]'></div>
        </div>
    )
}

export default AchieveYourGoal