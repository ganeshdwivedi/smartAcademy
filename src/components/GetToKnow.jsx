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
                            <img className='w-full object-cover h-full rounded-tl-2xl' src='https://s3-alpha-sig.figma.com/img/fccd/a898/ceac30884b5f3eb0013461babc1a145b?Expires=1705276800&Signature=CZvLXlkK2MH9YR7fXE8dZTw6GX0iVEuyjBauHKDB5r98z6SzwDyWI2p~Qh2q2N5aQ8KkXwoWL1exejb4ZUn0UyhydiLAIgRyjcPV3Cjw01DwTKwvA-pejsI1wivxADGVGYg5L5ttKDeQeF38yKqAZWJhU6~w32-nyOZV3K4wCLCTF1xB5gb7IfPZuiOy~EtcrJG4FVrjGIyS6gLl8mYXrVbTRbM7ofFb6Jnzb0B95ie2cMbyDJAjtiaYlvCgTaKc9hFUEPDMazzGoMTToz4cFoomoD7S80eVcf5m0ZJaP2dd~iP-Z3ET545ED2MBl-xg6T95nzzSMJP57CbNFSMscA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' alt='' />
                        </div>
                        <div className=' w-[25vw] h-[25vw] md:w-[145px] md:h-[145px]'>
                            <img className='w-full h-full object-cover' src='https://s3-alpha-sig.figma.com/img/112d/73d0/272e9024592a3457e0d6d2f267b6aba5?Expires=1705276800&Signature=OD4fRwfSK4Rk3HOo1ggJCLFGeJzZ0s71L11otGh95AvOdQFf8HeHTFZ5ErKHKJynsCMusbH4a90Zc5D7njy7fYORGZnu6XMvzHnezRgN5034oH7o04g-VGpz6~077m~svxOJLOMIiXc68~~LnZvPRSn54AwB5IY-74G0FfvKK4-Er6MVj1bBxzfujL10VsO6AxFgPgxklbIdML3xK6VoS~QLXkD13zFK5~SvRAGPn6NCA0HsNu0L5ACGXFTX0CV6TDrXx8H~KFQ2N6ALautNeKL3PpxJrRSJXOYbZTa45Qdpe-GLlSNF67O~7wXHWGKeI-59IYH3T9qj-iTqNOg62g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />
                        </div>
                        <div className='w-[50vw] h-[25vw] md:w-[300px] md:h-[90px]'> <img className='w-full h-full rounded-bl-2xl object-top object-cover' src="https://s3-alpha-sig.figma.com/img/ffc1/62d0/8c470285ac8081f7f560b825b1bf3523?Expires=1705276800&Signature=LuZSAdICTOoGPlI-bH-BEz~vWc6X35OZihiExheF1XkEtRG2EC1PAlKPUWOVWAe7SLf81BhCqJILxW9o7wsLKnBbCxYi6MGK9Bi4-YtMtmjPAsB6PrzPwPQsRibcMW6KxhQxrc4rUROkU1CsLYt1DWN4IJGr~nMoPo-PwJ9PQMeWo3oNuwhJMgUyeQrFEEPZbMAoO6vjuKWULy4eGKlkQRyeYvVvVWrwKeq~3oqNhJ9LqKgBSprEC3GUt64PmPHZAyUmihp6w0u91sEVI6Zvl02nr0bDpXwebaBvgureMOfC5-FSE~pf6pOuMyTlMV49fy75H-Ro5ygJMq37czgG1w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" /></div>

                    </div>
                    <div className='flex flex-col gap-2 absolute left-[34.5%] md:left-[9.5rem]'>
                        <div className='w-[24vw] md:w-[150px] md:h-[90px]'>
                            <img className='w-40 h-full' src='https://s3-alpha-sig.figma.com/img/44e1/840a/b838d6aaa964344bbdb36de58086c409?Expires=1705276800&Signature=N98~84GsP~QZYf9duMe~gN9PER1FWj0XdL5QqcIIakiTBuxpkwvTjdaLe2Wke8CAfk7wAAkgnNc1DWR2EN9P-hIg~5cIXdyB1KgRlpzAj2Xesx7LQUB2spT9hYQS3l38L06y0TS~C9wvNIToCM-4lr26AkWDIKkZ6M-cV3~aZkj2eYeilEajxzNO-7aoRVA5IE3U4KbBB48aZ8p1WYbC9RrhVffwaKL4zKsE-BDAb3yq-RpPEuPF~U5bGdNA22gRei1PtLMtv3q1lTO6CumVcYZ9zjeWkxVqlVzepqsBRF1Fy4TiMzTyzx1M29hHeOWLjrmq0WQxfs5QzJksBXatcw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' alt='' />
                        </div>
                        <div className='w-[24vw] h-[28vw] md:w-[150px] md:h-[175px]'>
                            <img className='w-full object-cover h-full' src='https://s3-alpha-sig.figma.com/img/7e8b/33ff/4705729706901cb8f065a4b1b942b465?Expires=1705276800&Signature=lM1fcz2F2Vz~18otyuZchZX6SFF~OOCKUb0eBzXigdfoWPVEq3IJkHS1zO2UrQT8IW~hNN6Stpu~GfOxTi6Sq-pBbJjVwIlxN09MeFM0H3T9M2V-gZFOfjX3Lp6nsV~0ihgyqSfeerFIn70yw9SoSpmPuEB26457biBbq7piQgciDbQG8xQQpJDItQae26dHOKBlo1VwPotGR9JiEismtm2~O6e4pNjW6m1HgOYR9JULUnhWdbCeB5FOyHUKJ1O1XRT3hAplVxSfMaeisjracSqfBuc-6lgpHsx1Dku-Kbqa~qEGILLmr~RUFPbJjQRRgUYCNU8ewmhHQYHy3H7sXA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' alt='' />
                        </div>

                    </div>

                    <div className='flex flex-col gap-2'>
                        <div className='w-[25vw] md:w-[115px] md:h-[110px]'>
                            <img className='w-full h-full object-cover rounded-tr-2xl' src='https://s3-alpha-sig.figma.com/img/b697/b6d4/1aaedcff16d275abf20178007a3c2f36?Expires=1705276800&Signature=hMTWdnYXGi0jl~QH3oDBMcQ5ZvZBMm5wFbLiNrXzQPNj0qFCWtyDpucJyEJ9hkpfUOf5s5BKuOnUo5ijEjPeq~fAjxtaGIZbR7A~q52-kz3fCqtDbh3BOmLemcFjD8yYXTEyKJpaEVgi0dTwzxvEwk4pY03mlFZIWKiMbxMbg4wHD3d7xmtruDMbNwqrJOOexm8mp8MSmaME-7OUmwGOgtR4mSPMtnRsfd-FiEUWuP9H~UKCVXddZWhudT4Fl9yDFsWMF5a5V5-uJh3RY3ul0peTiXYY~b6zLjczrS3oM4RolRzow0MYIYsW8jovZRfFj9JtW~vA48Nm8xRTIAtPJg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' alt='' />
                        </div>
                        <div className=' w-[25vw] h-[36vw] md:w-[115px] md:h-[155px]'>
                            <img className='w-full object-cover h-full' src='https://s3-alpha-sig.figma.com/img/627f/54df/a419f3c6a7aa206c8069a48165fa83df?Expires=1705276800&Signature=no3i9rSTMMCSGgd~ISX7hJSSaU63FjA9yVVMDtrpd81SQgY6Efu3w9cPHuHQo0CwMwkKTknlqz47cS8Ay8qU-R7CTYRYwn~tVESFWpy0P2GtlxzpdyAgL7e8z2F0mCcs6veBVGnaNGxkrXaCjkizkefrA7mcYI2wYa~a9rDSZAlcDao8-BdhkuhZcA9Qc2kaDycRk8J2KJuuaCmYWlm4gD01V14glQa4BTLB-hVpN3AGIrEfgX~eMlej6S~00oN3tBlJ-Ak4AJDemjZsnWqzAKVJOZZTVEDkIHoCcF-FBAGmqAf091FxKNcwjj2VWW94HcnhRZ5prPSjefFQLWnIaQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' alt='' />
                        </div>
                        <div className=' w-[25vw] md:w-[115px] md:h-[90px]'>
                            <img className='object-cover rounded-br-2xl  w-full h-full' src="https://s3-alpha-sig.figma.com/img/9b47/073d/6c7c6ea3b5fc9098616de81cf55347fd?Expires=1705276800&Signature=aj0qET7wbnP3MAQzkLR2sY7RQEIHbkrANLP2-aJj~P2EbBXh2VWh9DZNPPQo7c2YR~F70P9y-g05qdZtSBaK1NzPWtQZk3EQolsmXZ5htoxy8O7908v9W5zileoPUDpk0RCaRjvX0a-~Otu6sGcJIKjkaWdwaHHcfwbrKUOzyD5jBJQqh~iNTHQBPWFh5zH5qQrLxd~fSjH46KBunAzkL1V4L7NEywDXoZCcu-Gzrfiz~dDEgl1SdvlIGcb9-0dx4~Tfz~0pRLYHnVIuiK~Ui77UZ9sU97FxfQJdVdbl7DNVl9~H0nuGc28b7PE-3YQC6wKNu4EtGLU4Z-Tj5lSBtQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
                        </div>
                    </div>
                    <RectangleSvg className={"-bottom-10 -right-32"} />
                </div>
            </Slide>
        </div>
    )
}


export default GetToKnow