import MeetTheTeam from '@/components/blocks/CardBlock/MeetTheTeam'
import Pricing from '@/components/blocks/CardBlock/Pricing'
import ProblemStatement from '@/components/blocks/CardBlock/ProblemStatement'
import Services from '@/components/blocks/CardBlock/Services'
import SolutionStatement from '@/components/blocks/CardBlock/SolutionStatement'
import StepByStep from '@/components/blocks/CardBlock/StepByStep'
import Footer from '@/components/blocks/Footer'
import Gallery from '@/components/blocks/Gallery'
import Header from '@/components/blocks/Header'
import Masthead from '@/components/blocks/Masthead'

export default function page() {
  return (
    <div>
      <Header />
      <Masthead />
      <Services />
      <Gallery />
      <ProblemStatement />
      <MeetTheTeam />
      <StepByStep />
      <Pricing />
      {/* <CallToAction /> */}
      <Footer />
    </div>
  )
}
