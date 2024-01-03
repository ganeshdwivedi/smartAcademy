"use client"
import React from 'react'
import Star from './SVG/Star'
import RectangleSvg from './SVG/RectangleSvg'
import LineStarSvg from './SVG/LineStarSvg'
import HeroCurlySvg from './SVG/HeroCurlySvg'
import VideoSvg from './SVG/VideoSvg'
import HalfStar from './SVG/HalfStar'
import { Slide } from "react-awesome-reveal";


const Hero = () => {

    return (
        <Slide triggerOnce={true}>
            <section className='flex flex-col items-center md:items-start md:flex-row overflow-hidden justify-around relative bg-gradient-to-bl md:min-h-[110vh] from-[#FFEDDF] px-10 py-20 md:px-28 md:py-20 to-[#E3E2FC]'>
                <LineStarSvg className={"top-16 left-16"} />
                <HeroCurlySvg className={"top-16 left-0"} />
                <LineStarSvg className={"bottom-52 left-0"} />
                <div className='ml-0 md:mr-44'>
                    <p className='text-purple-700 text-sm font-bold font-sans my-3'>100% satisfaction guarantee</p>
                    <h2 className='sm:text-2xl md:text-[3.10rem] my-5 font-sans text-[#333333] md:leading-[4rem] font-extrabold'>
                        Learn Skills From Our Top Instructors
                    </h2>
                    <p className='text-[#666666] my-2'>Enhance your skills with guidance from our premier instructors.
                        Our website offers a unique opportunity to learn from
                        the best, gaining expertise in various fields.</p>
                    <div className='mt-10 mb-6 flex flex-row gap-4'>
                        <button className='bg-[#8708C2] hover:bg-[#9a1ed3] delay-75 text-white px-5  py-2 rounded-xl font-medium text-sm'>Sign Up Now</button>
                        <button className='text-[#8708C2] text-base flex flex-row gap-2  px-5  py-2 rounded-xl'>
                            <VideoSvg /> How It Works</button>
                    </div>
                    <h3 className='text-sm text-[#666666]'>Trusted
                        by Over 5 Million+ Students <br />
                        Worldwide Since 2003</h3>
                    <div className='flex flex-row gap-5 mt-5 mb-20'><p className='text-sm font-bold'>500k+ Reviews</p>
                        <p className='text-sm font-bold'>4.5</p>
                        <div className='flex flex-row'><Star /><Star /><Star /><Star /><HalfStar /></div></div>
                </div>

                <Slide triggerOnce={true} direction='up' >
                    <div className='mt-5 relative h-full p-3'>
                        <RectangleSvg className={"right-96 top-0"} />
                        <HeroCurlySvg className={"-scale-x-100 left-96 top-[14rem]"} />

                        <div className='w-[250px] h-[250px] md:w-[320px] md:h-[320px] rounded-full overflow-hidden'>

                            <img className='object-cover w-full h-full  overflow-hidden' src='https://s3-alpha-sig.figma.com/img/57f8/9f32/b52db02e21bf60c65ea5e4ec90214985?Expires=1705276800&Signature=ng1V8FuCBJzKJ1UECJxFEV9DTj2uGkYWiW~P9jBEK-5LxlPE~-Z1zR-KYwO7QCtGnOGwjopdYmBtcqYSUHxlKMBdbdutIaLlCutWkAcjaxVBHQ4Jk-YC6WUHqjww6Vk4ow9mjFT25CAwA71ynu67HryS8AS1xNYxJTKO~VAwjeHjE8WtLUE5wnJimhszv60FEvCqKSFsEekF1TpL2nO8D63LL5olBW0iv2wQgCaXVrexO5x4VhQZAoBnHx5DB~2lX4UYWdiLKb0crJupVmYPqvfN0V480mz1nrR7LZJT5F-5UCK0SErFux7CtDguTtllsRnPDy6RYThRXEJqRJz6aA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />
                            <div className="inlay-circle md:block hidden fixed top-3 -right-1"></div>
                        </div>


                        <div className='absolute text-center top-[8rem] right-[19rem] bg-purple-700 text-white rounded-[100%] w-24 h-24 border-4 border-white p-2 '><p className='text-base font-bold'>56k</p>
                            <p className='text-sm'>Enrolled</p>
                            <p className='text-xs'>Learner</p></div>
                        <div className='absolute right-1 top-[15rem] w-6 rounded-full h-6 bg-purple-700 text-center px-2 py-[6px]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="12" viewBox="0 0 9 12" fill="none">
                                <g clip-path="url(#clip0_241_294)">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.84126 7.60292L2.89645 10.9464C1.69155 11.7612 0.0595703 10.9059 0.0595703 9.45985V2.77338C0.0595703 1.32732 1.69155 0.472069 2.89645 1.28687L7.84126 4.63032C8.08499 4.79414 8.2847 5.01522 8.42278 5.27442C8.56086 5.53362 8.63309 5.82292 8.63309 6.11662C8.63309 6.41031 8.56086 6.69961 8.42278 6.95881C8.2847 7.21801 8.08499 7.43909 7.84126 7.60292Z" fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_241_294">
                                        <rect width="8.57581" height="10.2923" fill="white" transform="translate(0.0595703 0.970322)" />
                                    </clipPath>
                                </defs>
                            </svg></div>

                    </div>
                </Slide>
            </section>
        </Slide>
    )
}

export default Hero