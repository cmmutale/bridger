import React from 'react'
import Header from '@/components/header'
import Programs from '@/components/landing/Programs'
import AboutIntro from '@/components/landing/AboutIntro'
import Masthead from '@/components/landing/Masthead'
import Offering from '@/components/landing/Offering'
import TeachersIntro from '@/components/landing/TeachersIntro'
import VirtualTour from '@/components/landing/VirtualTour'
import Testimonials from '@/components/landing/Testimonials'
import FAQ from '@/components/landing/FAQ'
import Cta from '@/components/landing/Cta'
import Footer from '@/components/Footer'


export default function page() {
  return (
    <>
      <Masthead />
      <AboutIntro />
      <Programs />
      <Offering />
      <TeachersIntro />
      <VirtualTour />
      <Testimonials />
      <FAQ />
    </>
  )
}
