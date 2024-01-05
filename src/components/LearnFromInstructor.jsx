import React from 'react'
import InstructorCard from './InstructorCard';

const LearnFromInstructor = () => {
    return (
        <div className='bg-[#1C1C1C] py-[30px] lg:py-[70px] lg:items-start flex flex-col px-[30px] xl:px-[155px]'>
            <div>
                <h3 className='capitalize font-bold text-base lg:text-[24px] my-2 text-white'>Learn from the best instructors</h3>
                <p className='lg:text-[15px] leading-6 text-xs text-white'>Learn From the best instructors to gain insight,Master skills, and excel in your endeavors. Their<br className='lg:block hidden' /> expertise accelerates your progress.</p>

            </div>
            <div className='my-10 grid grid-cols-2 xl:gap-x-[35px] lg:grid-cols-4 lg:gap-x-[40px] md:gap-x-[20vw] gap-[30px] md:gap-y-[40px]'>

                <InstructorCard imgsrc={"https://s3-alpha-sig.figma.com/img/8411/e6b6/1327ef247d9dda4903c822609cec97fe?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iMMlj-yeb6~l1QGj4gaH-qIoacfAXzmRypeCU2DYe7ArRTF7GO66gQNDXX54r5t2~wEc9x~pT5lCFtRukx4JMX1gLCaBf5qU8mHnpvOHSvCeruRZGnpI41EdYYG16g9GlTfPV-tIZJEtYnD0XN7J-oD~IXuL6Rvji8ZSjeeqTHGlpsZ7xYIfaclNoQHWe~ZPQeIZETk1RSWHXf~qDjtYLKV95-zULQiA2j55yaU5kTQSh4MzV2DsEf9aylvpw8-OL2Qi6BKlV81sDO8CciJLL6r1A6ZWpaPtarHr87zNL8orSF9SmGrr~Ub-vhCkSYVUJmFxA3LYnseQe7FpQSdjfw__"} text={"Michale"} />
                <InstructorCard imgsrc={"https://s3-alpha-sig.figma.com/img/9db4/b2b6/457ae2406243110e78013611127dc4b6?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ScVpwrPIQXBjQRf~~fEQeF7ATFseR7eHljDJVnnyXRgjM~HiCig2Z3KUa66xuE4zaI8HMaZrqHo2ZqBp~lOF4l4ZOhXI6pzLN3a2tJR6ahpVszHzuTwqohaY4eN2v2C-tRd975Qy5OKo0AcIZmocBtR1SIHcOZFVfr5xoMnqIBopcLOO5NjjG2~W19XAFJG~PImeMm4YHemHC7SyaaAF8sNmTZzhUHUcUNbXSjvi3ilTf3vkHs0HxaGq53mPXRKZgk1MDoGKJ7adryfR6tdpP2lctdkXqqnhbyEb-IDhn7BGTtb8ulGFhpdIZVyPF2bfWOc6eoDOv-IduJKwZ43U7Q__"} text={"Tony Danza"} />
                <InstructorCard imgsrc={"https://s3-alpha-sig.figma.com/img/0695/e4f6/c068361ba8b5d5f36aacf7f12ba7ebb5?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FornhtSzIuE0PDbmR1kuB3BSceyc7P1eYAmbFJP70gXzBfON6mS0V9UW16h~CHA0wsKTP5JirWEsR0CaNzIHgtTDkA~4X6f5gqK30TAlz2uCpgZxc5ykrN1hF1gxVEwBr7EPoH3Pt3o7VrR1jiR7AOlUtC2jZAeCYhDlBNUM2TRxoWtNWOtfadbGisXBRaCRawb7s2ovn-Wyrh9aEQKCfWi7TJDQKMF-Cvtt8nit2Z80T53eop30S-c1va1ne0kXsLFHhVy~AFCnrPHvDMM29QUm8~b-rOZ5tVvfaUs3s3P63E5SGxbgGGyB~bWBkFghRPKakwIolCkeAX~pNqCVzQ__"} text={"Rick Wright"} />
                <InstructorCard imgsrc={"https://s3-alpha-sig.figma.com/img/feee/7417/be43432f64f5cd162565a04e6f8f7c6b?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nUy2JhEdbHaJeg-ACDPQxyRMNoMNuXgwSV6lvbhhz1PpienP8ptUMtZoLsMg0HgQnLYiNtl8YZwLMDw9jcagwdar6piWYfmuUAVD2MO7lWIR-I7BBz-9XLnQYsSeDfd7QsP2DR5IsQB5n6N9jZvGdho7je~wg-1kaOgPy8ySF4ejlKMxPCzefm0uV5QV20o~249Rts-M7mzJcaUUpsaDY0T11dEqLnijlzCJK4CA1wp5-f8NusOOqUHwg9tA9UL7toiK6FsPYUqHmkwn1buIEx-duhKH88fw1ILHwrCLY0xSU2vzHLc0DUt9hLlU~9nPCq9h8NBqacdJ9HKSCWQaqQ__"} text={"Kate Tanner"} />
            </div>
        </div >
    )
}

export default LearnFromInstructor