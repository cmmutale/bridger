import { Separator } from "@/components/ui/separator";

export default function page() {
    return (
        <>
            <section className="wrapper new-section bg-[var(--branding-primary)] text-[var(--branding-secondary)]">
                <div className="container_background"></div>
                <div className="container_content u-container">
                    <h2 className="font-bold fs-4 text-center">Services</h2>
                </div>
            </section>

            <section className="wrapper new-section bg-white text-[var(--branding-alt)]">
                <div className="container_background"></div>
                <div className="container_content u-container">
                    <div className="textbox space-y-[var(--space-s)]">
                        <h2 className="font-bold fs-2 text-center">Website Design</h2>
                        <p className="mx-auto text-center">
                            We create wireframes and proof of concept designs that you can use.
                            Using Figma, Canva and other design software, we create digital assets
                            for your business.
                        </p>
                    </div>
                </div>
            </section>
            <Separator className='bg-[var(--branding-alt)] h-[4px] mx-auto max-w-xl' />
            <section className="wrapper new-section bg-white text-[var(--branding-alt)]">
                <div className="container_background"></div>
                <div className="container_content u-container">
                    <div className="textbox space-y-[var(--space-s)]">
                        <h2 className="font-bold fs-2 text-center">Website Development</h2>
                        <p className="mx-auto text-center">
                            From Wordpress to hard-code, we bring your designs to life.
                        </p>
                    </div>
                </div>
            </section>

        </>
    )
}
