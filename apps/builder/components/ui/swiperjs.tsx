'use client'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export default function Swiperjs({ slideItems }: any) {
    return (
        <Carousel className="">
            <CarouselContent className="h-[250px]">
                {slideItems.map((item: any, index: number) => (
                    <CarouselItem
                        key={index}
                        style={{
                            flexBasis: 280,
                        }}>
                        <div className="w-full h-full">
                            <div className="space-y-2">
                                <p className="text--lg font-black">{item.title}</p>
                                <p className="text--sm">{item.body}</p>
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <div className="flex gap-4 mt-4 relative">
                <CarouselPrevious className="btn btn--outline" />
                <CarouselNext className="relative translate-x-[150%] btn btn--outline" />
            </div>
        </Carousel>
    )
}