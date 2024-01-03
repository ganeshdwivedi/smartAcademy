import React from 'react'

const NewsLater = () => {
    return (
        <div className='flex flex-row my-5 justify-around p-20'>
            <div >
                <h3 className='text-3xl font-bold'>Sign up for our newsletter</h3>
                <p className='text-lg text-[#666666] my-4'>Stay in the loop with everything you need to know.</p>
            </div>
            <div>
                <div><input className='w-80 px-3 py-2 rounded-md border-2 border-slate-200' type='email' placeholder='Enter your email' />
                    <button className='bg-[#8608C2] mx-4 text-sm text-white px-4 py-2 rounded-md'>Subscribe</button></div>
                <p className='text-xs my-2'>We care about your data in our <span className='text-purple-700 font-bold'>privacy policy</span></p>
            </div>
        </div>
    )
}

export default NewsLater