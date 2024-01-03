"use client"
import React from 'react'
import First from './SVG/Institutes/First'
import Second from './SVG/Institutes/Second'
import Third from './SVG/Institutes/Third'
import Fourth from './SVG/Institutes/Fourth'
import Fifth from './SVG/Institutes/Fifth'
import Sixth from './SVG/Institutes/Sixth'
import Seventh from './SVG/Institutes/Seventh'
import Eighth from './SVG/Institutes/Eighth'
import Ninth from './SVG/Institutes/Ninth'
import Tenth from './SVG/Institutes/Tenth'
import { Fade } from 'react-awesome-reveal'

const TheseInstitute = () => {
    return (
        <div className='lg:my-20 lg:mx-36 m-10 flex lg:items-start items-center flex-col'>
            <div>
                <h3 className='text-xl font-extrabold my-2'>These Institutes Trust us</h3>
                <p className='text-sm lg:text-base text-[#666666]'>Institutes rely on our expertise, experience, and proven track record. Trust <br /> us for innovative solutions and reliable support.</p>
            </div>
            <div className='grid md:grid-cols-4 grid-cols-3 lg:grid-cols-5 my-10 gap-5 lg:gap-y-[60px] lg:gap-x-[156px]'>
                <Fade triggerOnce={true}>
                    <First />
                    <Second />
                    <Third />
                    <Fourth />
                    <Fifth />
                    <Sixth />
                    <Seventh />
                    <Eighth />
                    <Ninth />
                    <Tenth />
                </Fade>
            </div>
        </div>
    )
}

export default TheseInstitute