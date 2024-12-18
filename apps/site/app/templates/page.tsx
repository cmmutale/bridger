import { Button } from "@/components/ui/button"
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import Image from "next/image"

const templates = [
    {
        bannerImage: "/little-horizons-daycare.vercel.app.png",
        name: "Little Horizons Daycare",
        description: "",
        liveDemo: "https://little-horizons-daycare.vercel.app/"
    },
]
export default function page() {
    return (
        <>
            <section className="wrapper new-section bg-[var(--branding-primary)] text-[var(--branding-secondary)]">
                <div className="container_background"></div>
                <div className="container_content u-container">
                    <h2 className="font-bold fs-4 text-center">Templates</h2>
                </div>
            </section>

            <section className="wrapper new-section">
                <div className="container_background"></div>
                <div className="container_content u-container">
                    <div className="card-grid">
                        <div className="card-grid_content u-grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[var(--space-m)]">
                            {
                                templates.map((template, index) => {
                                    return (
                                        <Card key={index} className="bg-[var(--branding-secondary)]">
                                            <div className="relative h-64 w-auto overflow-hidden border-[4px] border-[var(--branding-alt)]">
                                                <Image
                                                    src={template.bannerImage}
                                                    fill
                                                    alt="template banner image"
                                                    className="object-cover ml-auto object-top"
                                                />
                                            </div>
                                            <CardHeader>
                                                <CardTitle>{template.name}</CardTitle>
                                                <Separator className='bg-[var(--branding-alt)] h-[4px]' />
                                            </CardHeader>
                                            <CardFooter>
                                                <Link href={template.liveDemo} target="_blank">
                                                    <Button size={`sm`}>Live Demo</Button>
                                                </Link>
                                            </CardFooter>
                                        </Card>

                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
