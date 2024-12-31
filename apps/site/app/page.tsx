import Pricing from '@/components/landing/Pricing'
import Services from '@/components/landing/Services'
import ProblemStatement from '@/components/landing/ProblemStatement'
import Masthead from '@/components/landing/Masthead'
import HowItWorks from '@/components/landing/HowItWorks'
import Portfolio from '@/components/landing/Portfolio'

export default function page() {
  return (
    <>
      <Masthead />
      <Portfolio />
      <Services />
      {/* <ProblemStatement /> */}
      <HowItWorks />
      <Pricing />
    </>
  )
}
