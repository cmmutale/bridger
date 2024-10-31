import React from 'react'
import { InformationBlock, InformationCopyHeading, InformationCopyBody, InformationActions } from '.'
import { Button } from '@/components/ui/button'

export default function CallToAction() {
    return (
        <section className='min-h-[600px] flex items-center justify-center '>
            <InformationBlock variant={`topToDown`}>
                <InformationCopyHeading>
                    <h1 className='font-extrabold text-3xl sm:text-4xl'>
                        Ready to make an
                        <span className='font-heading'> impact?</span></h1>
                </InformationCopyHeading>
                <InformationCopyBody>
                    <p></p>
                    <InformationActions variant='topToDown'>
                        <Button size={`lg`} className='uppercase'>Get started today</Button>
                    </InformationActions>
                </InformationCopyBody>
            </InformationBlock>
        </section>
    )
}
