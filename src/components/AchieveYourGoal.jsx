"use client"
import React from 'react'
import CurlyArrow from './SVG/CurlyArrow'
import { AttentionSeeker, Slide } from 'react-awesome-reveal'

const AchieveYourGoal = () => {
    return (
        <div className='achieve overflow-hidden relative h-[250px]'>
            <CurlyArrow className={"top-20"} />
            <div className='flex flex-row relative'>
                <div className='pt-5 px-36'>
                    <h3 className='capitalize my-2 text-white font-medium text-2xl'>
                        achieve your goal with
                        <p className='capitalize text-xl'>smart academy</p>
                    </h3>
                    <p className='capitalize text-xs leading-5 text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br />
                        Lorem Ipsum has been the industry's standard dummy
                        <br />
                        text ever since the 1500s. </p>
                    <AttentionSeeker effect='jello'>
                        <button className='rounded-lg animate-bounce bg-[#8708C2] px-5 py-1 text-white text-sm font-medium mb-[0.8rem] mt-5'>Register here</button>
                    </AttentionSeeker>
                </div>

                <Slide direction='right' className='w-[420px] h-[250px] absolute right-20 overflow-hidden'>
                    <img className='object-cover scale-125 w-full h-full' src="https://s3-alpha-sig.figma.com/img/10e6/c3a2/5f176190c0fb5eee418376914b148a0a?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QIF6uFkNVNav-fBpRJbKTRuTm5oIKlyPhxwBriv73tk473cH3i8jlmD8lJab-uQ~rye-oHKvRdrDKFWNyQR432MNNd52rf~0QaR0E2zl1nGe5~D5ppAzlu2aRRj8PBnDUtpVDJKCf6UA9xZ7nApNdmw~5bYMN85H~DZFYsRMczxeC5AtOy-UCOk6vGdwy1g9CucstiC2DlNW6gOl9Hks72ZNnPKwRUMdlWhYOCyQ4kOJXf1mXwmZtVyXBLnTtgQJZR~cm-J9e0O6~TxYEViW7ohWULgnP~OGlThZhurKo15jrH9bhYQPy-lvZuoiJxDc-4t4Ibqso-f1C5pQW-sJTw__" alt="" />
                </Slide>
            </div>
            <div className='h-[43px] w-full bg-[#9C79B3]'></div>
        </div>
    )
}

export default AchieveYourGoal