import MeetTheTeam from '@/components/blocks/CardBlock/MeetTheTeam'
import Pricing from '@/components/blocks/CardBlock/Pricing'
import ProblemStatement from '@/components/blocks/CardBlock/ProblemStatement'
import SolutionStatement from '@/components/blocks/CardBlock/SolutionStatement'
import StepByStep from '@/components/blocks/CardBlock/StepByStep'
import Footer from '@/components/blocks/Footer'
import Gallery from '@/components/blocks/Gallery'
import Header from '@/components/blocks/Header'
import CallToAction from '@/components/blocks/InformationBlock/CallToAction'
import Masthead from '@/components/blocks/Masthead'
import React from 'react'

export default function page() {
  return (
    <div>
      <Header />
      <Masthead />
      <Gallery />
      <ProblemStatement />
      <MeetTheTeam />
      <SolutionStatement />
      <StepByStep />
      <Pricing />
      {/* <CallToAction /> */}
      <Footer />
    </div>
  )
}
