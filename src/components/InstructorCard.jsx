import React from 'react'
import Linkedin from './SVG/Social/Linkedin';
import Facebook from './SVG/Social/Facebook';
import Instagram from './SVG/Social/Instagram';

const InstructorCard = ({ imgsrc, text }) => {
    return (
        <div className="xl:h-[256px] lg:w-[20.5vw] xl:w-[256px] md:w-[36vw] md:h-[300px] w-[40vw] overflow-hidden group relative cursor-pointer items-center justify-center transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="xl:h-[256px] xl:w-[256px] w-[40vw] lg:w-[20.5vw] md:w-[36vw] md:h-[300px] h-[240px]">
                <img className="h-full object-top overflow-hidden w-full object-cover transition-transform duration-500 " src={imgsrc} alt="" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif capitalize text-sm font-bold text-white">{text}</h1>
                <div className="flex flex-row my-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 gap-5"><button><Linkedin /></button>
                    <button><Facebook /></button>
                    <button><Instagram /></button>
                </div>
            </div>
        </div>
    )
}

export default InstructorCard