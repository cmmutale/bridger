import React from 'react'
import Programs from '@/components/landing/Programs'
import AboutIntro from '@/components/landing/AboutIntro'
import Masthead from '@/components/landing/Masthead'
import Offering from '@/components/landing/Offering'
import TeachersIntro from '@/components/landing/TeachersIntro'
import VirtualTour from '@/components/landing/VirtualTour'
import Testimonials from '@/components/landing/Testimonials'
import FAQ from '@/components/landing/FAQ'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import ArrowUp from '@/components/icons/Arrow-Up'


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
      <div className='fixed z-50 bottom-[var(--space-m)] right-[var(--space-m)]'>
        <Link href={`#`} className=''>
          <Button size={`icon`} className=''>
            <ArrowUp className="fill-white stroke-white w-6 h-6" />
          </Button>
        </Link>
      </div>

    </>
  )
}
