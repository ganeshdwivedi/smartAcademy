import React from 'react'

const NewsLater = () => {
    return (
        <div className='flex lg:flex-row flex-col p-10 md:my-5 justify-between xl:px-[155px] lg:py-[] px-[30px]'>
            <div>
                <h3 className='md:text-xl lg:text-[36px] font-bold'>Sign up for our newsletter</h3>
                <p className='md:text-sm lg:text-[20px] text-[#666666] my-4'>Stay in the loop with everything you need to know.</p>
            </div>
            <div>
                <div className='flex flex-row gap-[8px]'>
                    <input className=' lg:px-[14px] w-80 h-[46px] lg:py-[10px] rounded-md border-2 border-slate-200 lg:text-[15px] xl:text-[16px]' type='email' placeholder='Enter your email' />
                    <button className='bg-[#8608C2] text-sm lg:text-[16px] text-white px-2 lg:px-[18px] lg:py-[12px] py-2 rounded-md'>Subscribe</button>
                </div>
                <p className='text-xs my-2'>We care about your data in our <span className='text-purple-700 font-bold'>privacy policy</span></p>
            </div>
        </div>
    )
}

export default NewsLater