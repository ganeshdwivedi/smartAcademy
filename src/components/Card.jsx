import React from 'react'
import { Slide } from 'react-awesome-reveal'
import CategoryCard from './CategoryCard'

const Card = () => {

    return (
        <div className='grid grid-cols-2 gap-[43px] md:grid-cols-3 lg:grid-cols-4 lg:gap-[43px]'>
            <Slide triggerOnce={true} direction='up' duration={500}>
                <CategoryCard imgsrc={"https://athago.com/wp-content/uploads/2023/03/branding.jpg"} title={"Design"} />
                <CategoryCard imgsrc={"https://ignitiveinfotech.com/assets/images/about/about.jpg"} title={"Web Development"} />
                <CategoryCard imgsrc={"https://media.licdn.com/dms/image/D4E12AQF3vdXRzz-hVQ/article-cover_image-shrink_720_1280/0/1678731364425?e=1710979200&v=beta&t=wfpe3R98P7kB8U9NMCUveN1rJ8d1SZ3TRoH6xUGu2i0"} title={"App Develpoment"} />

                <CategoryCard imgsrc={"https://www.planeks.net/wp-content/uploads/2022/06/close-up-hand-holding-futuristic-screen-scaled.jpeg"} title={"Data Analyst"} />

                <CategoryCard imgsrc={"https://i0.wp.com/newscooper.co.uk/wp-content/uploads/2023/11/Machine-Learning.webp?w=1270&ssl=1"} title={"Artificial Inteligence"} />

                <CategoryCard imgsrc={"https://neonsols.com/wp-content/uploads/2022/12/b4-470x420.jpg"} title={"Cyber Security"} />
                <CategoryCard imgsrc={"https://img.freepik.com/free-photo/female-web-designer-office-with-notebook_23-2149749867.jpg?w=740&t=st=1705511517~exp=1705512117~hmac=2a2e89df61bc8c5c05627730483e50974bb19e071eeaa85acbd2fd44d2b276ca"} title={"Project Management"} />

                <CategoryCard imgsrc={"https://www.voxtur.com/wp-content/uploads/2022/09/data-tabs-image.jpg"} title={"Business"} />
            </Slide>
        </div >

    )
}

export default Card
