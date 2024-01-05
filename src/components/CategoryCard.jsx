import React from 'react'

const CategoryCard = ({ imgsrc, SVG, title }) => {
    return (
        <div className="lg:w-[190px] xl:w-[250px] xl:h-[140px] md:w-[28vw] w-[40vw] h-[120px] md:h-[140px] bg-center rounded-3xl overflow-hidden group relative cursor-pointer items-center justify-center transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="lg:w-[190px] xl:w-[250px] xl:h-[140px] md:w-[28vw] w-[40vw] h-[120px] md:h-[140px]">
                <img className="h-full overflow-hidden w-full object-cover transition-transform duration-500 " src={imgsrc} alt="" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif capitalize text-xs font-medium text-white">{title}</h1>
                <div className="flex flex-row my-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 gap-5">
                    {SVG}
                    <p className='text-slate-100 text-xs'>200+ Courses</p>
                </div>
            </div>
        </div>
    )
}

export default CategoryCard