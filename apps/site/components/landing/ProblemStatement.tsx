import React from 'react'
import { Card, CardHeader, CardContent, CardFooter, CardTitle } from '../ui/card'
import { Separator } from '../ui/separator'


export default function ProblemStatement() {
    return (
        <section className="wrapper new-section">
            <div className="card_background"></div>
            <div className="card_content u-container u-container--narrow space-y-[var(--space-m)]">
                <div className="textbox">
                    <h2 className='font-[family-name:var(--font-heading)] font-bold fs-3 text-center'>Why Work With Us?</h2>
                </div>
                <div className="card-grid">
                    <div className="card-grid_content u-grid auto-grid place-content-center">
                        <Card className='scale-90'>
                            <CardHeader className="space-y-[var(--space-s)]">
                                <CardTitle>The Old Way</CardTitle>
                                <Separator className='bg-[var(--branding-alt)] h-[4px]' />
                            </CardHeader>
                            <CardContent>
                                <ul>
                                    <li className='flex gap-[var(--space-3xs)]'>
                                        <span className='block font-bold shrink-0'>-</span>
                                        <span>Struggling to pick the right tools or platform for your website.
                                        </span>
                                    </li>
                                    <li className='flex gap-[var(--space-3xs)]'>
                                        <span className='block font-bold shrink-0'>-</span>
                                        <span>Endless project timelines and budget overruns.
                                        </span>
                                    </li>
                                    <li className='flex gap-[var(--space-3xs)]'>
                                        <span className='block font-bold shrink-0'>-</span>
                                        <span>Neglecting updates, security, and regular maintenance.
                                        </span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                        <Card className='scale-105 border-[4px] border-[var(--branding-alt)]'>
                            <CardHeader className="space-y-[var(--space-s)]">
                                <CardTitle>The New Way</CardTitle>
                                <Separator className='bg-[var(--branding-alt)] h-[4px]' />
                            </CardHeader>
                            <CardContent>
                                <ul>
                                    <li className='flex gap-[var(--space-3xs)]'>
                                        <span className='font-bold shrink-0 block'>-</span>
                                        <span>Launch your site on time and within budget — every single time.</span></li>
                                    <li className='flex gap-[var(--space-3xs)]'>
                                        <span className='font-bold shrink-0 block'>-</span>
                                        <span>Focus on growing your business while we handle the tech.</span></li>
                                    <li className='flex gap-[var(--space-3xs)]'>
                                        <span className='font-bold shrink-0 block'>-</span>
                                        <span>Attract leads and reach a wider audience 24/7.</span></li>
                                </ul>
                            </CardContent>
                        </Card>

                    </div>
                </div>
            </div>
        </section >
    )
}
