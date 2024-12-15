// import MeetTheTeam from '@/components/blocks/CardBlock/MeetTheTeam'
import Pricing from '@/components/landing/Pricing'
import Services from '@/components/landing/Services'
import ProblemStatement from '@/components/landing/ProblemStatement'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Masthead from '@/components/landing/Masthead'
import AboutIntro from '@/components/landing/AboutIntro'
import HowItWorks from '@/components/landing/HowItWorks'
import Showcase from '@/components/landing/Showcase'
import Cta from '@/components/landing/Cta'

export default function page() {
  return (
    <>
      <Masthead />
      <AboutIntro />
      <Services />
      <Showcase />
      <ProblemStatement />
      <HowItWorks />
      <Pricing />
    </>
  )
}
