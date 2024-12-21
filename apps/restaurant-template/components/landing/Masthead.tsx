import Image from 'next/image'
import { Button } from "@/components/ui/button"

export default function TwoColumnLayout() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Left Column */}
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                        Empower Your Workflow
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        Streamline your projects, boost productivity, and achieve more with our cutting-edge tools and intuitive interface.
                    </p>
                    <Button size="lg">
                        Get Started
                    </Button>
                </div>

                {/* Right Column */}
                <div className="mt-10 md:mt-0">
                    <Image
                        src="/placeholder.svg"
                        alt="Placeholder image"
                        width={600}
                        height={400}
                        className="rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </div>
    )
}

