import AchieveYourGoal from '@/components/AchieveYourGoal'
import Category from '@/components/Category'
import Footer from '@/components/Footer'
import GetToKnow from '@/components/GetToKnow'
import Hero from '@/components/Hero'
import LearnFromInstructor from '@/components/LearnFromInstructor'
import Navbar from '@/components/Navbar'
import NewsLater from '@/components/NewsLater'
import TheseInstitute from '@/components/TheseInstitute'

export default function Home() {
  return (<>
    <Navbar />
    <Hero />
    <Category />
    <GetToKnow />
    <TheseInstitute />
    <LearnFromInstructor />
    <AchieveYourGoal />
    <NewsLater />
    <Footer />
  </>
  )
}
