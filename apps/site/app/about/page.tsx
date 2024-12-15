import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function page() {
    return (
        <>
            <section className="wrapper new-section bg-[var(--branding-primary)] text-[var(--branding-secondary)]">
                <div className="container_background"></div>
                <div className="container_content u-container">
                    <h2 className="font-bold fs-4 text-center">About Us</h2>
                </div>
            </section>
            <section className="wrapper new-section">
                <div className="container_background"></div>
                <div className="container_content u-container u-grid place-content-center">
                    <div className="textbox space-y-[var(--space-m)]">
                        <h2 className="font-bold fs-2">Who We Are</h2>
                        <p className="sm:columns-2">
                            At Nodedrop, we create websites that reflect your brand’s
                            character and excellence. Founded by Chilufya Mutale, an
                            experienced Full Stack Developer, our mission is to make the
                            internet more aesthetic and functional. 🌟

                            Nodedrop helps small businesses and individuals struggling with
                            outdated websites by delivering stunning, user-friendly designs. 🚀
                        </p>
                    </div>
                </div>
            </section>
            <section className="wrapper new-section">
                <div className="container_background"></div>
                <div className="container_content u-container u-grid place-content-center">
                    <div className="textbox space-y-[var(--space-m)]">
                        <h2 className="font-bold fs-2">What We Do</h2>
                        <p className="sm:columns-2">
                            We design websites tailored to your needs, ensuring your
                            online presence works for you 24/7. 🌐

                            We’re also building an easy-to-use website builder to rival
                            giants like Webflow and Framer Motion, empowering
                            businesses to create beautiful, functional sites effortlessly. 💻

                        </p>
                    </div>
                </div>
            </section>

            <section className="wrapper new-section bg-[var(--branding-secondary)] text-[var(--branding-alt)]">
                <div className="container_background"></div>
                <div className="container_content u-container u-grid place-content-center">
                    <div className="textbox space-y-[var(--space-m)]">
                        <h2 className="font-bold fs-2">Meet the team</h2>
                    </div>
                    <div className="card-grid">
                        <div className="card-grid_content u-grid gap-[var(--space-m)]">
                            <Card className="border-[4px] border-[var(--branding-alt)] bg-white">
                                <CardHeader className='space-y-[var(--space-s)]'>
                                    <div className="flex justify-between items-center">
                                        <CardTitle>Chilufya</CardTitle>
                                        <div>
                                            <Link href={`#`}>
                                                <Button size={`sm`} variant={`link`}>LinkedIn</Button>
                                            </Link>
                                        </div>
                                    </div>
                                    <Separator className='bg-[var(--branding-alt)] h-[4px]' />
                                </CardHeader>
                                <CardContent>
                                    <p>
                                        Lead Designer & Developer specializing in React and ASP.NET.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card className="border-[4px] border-[var(--branding-alt)] bg-white">
                                <CardHeader className='space-y-[var(--space-s)]'>
                                    <div className="flex justify-between items-center">
                                        <CardTitle>Tatenda</CardTitle>
                                        <div>
                                            <Link href={`#`}>
                                                <Button size={`sm`} variant={`link`}>LinkedIn</Button>
                                            </Link>
                                        </div>
                                    </div>
                                    <Separator className='bg-[var(--branding-alt)] h-[4px]' />
                                </CardHeader>
                                <CardContent>
                                    <p>
                                        Infrastructure & Security Analyst ensuring rock-solid website security.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

