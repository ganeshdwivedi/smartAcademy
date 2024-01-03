import React from 'react'
import Logo from './Logo'
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    const footerlink = "text-xs text-[#43595C] my-2"
    return (
        <footer className='flex bg-white flex-col px-32 py-5'>
            <div className='flex flex-row justify-around my-5'> <div>
                <Logo />
                <h3 className='text-xs'>Learn from the best instructors<br />
                    to gain insights, master skills,<br />
                    and excel in your endeavors.</h3>
            </div>
                <div>
                    <h3 className='text-[#43595C] font-bold text-xs mb-4'>
                        Products
                    </h3>
                    <ul >
                        <li className={footerlink}>Catalog</li>
                        <li className={footerlink}>Prepaid cards</li>
                        <li className={footerlink}>Gift cards</li>
                        <li className={footerlink}>Money</li>
                        <li className={footerlink}>charity</li>
                        <li className={footerlink}>Amazon.com gift cards</li>
                    </ul>
                </div>
                <div>
                    <h3 className='text-[#43595C] font-bold text-sm mb-4'>
                        Solutions
                    </h3>
                    <ul className={footerlink}>
                        <li className={footerlink}>For developers</li>
                        <li className={footerlink}>For Sales</li>
                        <li className={footerlink}>For research professionals</li>
                        <li className={footerlink}>For human resources</li>
                        <li className={footerlink}>For UX researchers</li>
                        <li className={footerlink}>For market reaerchers</li>
                    </ul>
                </div>
                <div>
                    <h3 className='text-[#43595C] font-bold text-sm mb-4'>
                        Resources
                    </h3>
                    <ul className={footerlink}>
                        <li className={footerlink}>Pricing</li>
                        <li className={footerlink}>Blog</li>
                        <li className={footerlink}>Case Studies</li>
                        <li className={footerlink}>Help Center</li>
                    </ul>
                </div>
                <div>
                    <h3 className='text-[#43595C] font-bold text-sm mb-4'>
                        Developers
                    </h3>
                    <ul className={footerlink}>
                        <li className={footerlink}>API</li>
                        <li className={footerlink}>Status</li>
                        <li className={footerlink}>Documentation</li>
                    </ul>
                </div>
                <div>
                    <h3 className='text-[#43595C] font-bold text-sm mb-4'>
                        Company
                    </h3>
                    <ul className={footerlink}>
                        <li className={footerlink}>About us</li>
                        <li className={footerlink}>History</li>
                        <li className={footerlink}>VC-free</li>
                        <li className={footerlink}>News</li>
                        <li className={footerlink}>Careers</li>
                    </ul>
                </div>
            </div>
            <hr className='w-full' />
            <div className='flex flex-row text-xs my-5 justify-between'>
                <div className='flex flex-row gap-5 text-[#43595C] font-bold'>
                    <p className='font-normal'>© 2023 smartacademy.Ltd.</p>
                    <p>Terms</p>
                    <p>Privacy</p>
                    <p>Security</p>
                    <p>Cookies</p></div>
                <div className='flex flex-row gap-5'>
                    <YouTubeIcon fontSize='small' />
                    <FacebookIcon fontSize='small' />
                    <InstagramIcon fontSize='small' />
                </div>
            </div>
        </footer >
    )
}

export default Footer