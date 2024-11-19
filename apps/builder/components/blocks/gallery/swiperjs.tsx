'use client'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

export default function Swiperjs({ slideItems }: any) {
    return (
        <Carousel className="">
            <CarouselContent className="h-[380px]">
                {slideItems.map((item: any, index: number) => (
                    <CarouselItem
                        key={index}
                        style={{
                            flexBasis: 243,
                        }} className="pl-0">
                        <div className="w-full h-full bg-black text-white flex flex-col">
                            {
                                item.title && (
                                    <div className="text-sm text-center py-2 font-semibold">
                                        <p className="">{item.title}</p>
                                    </div>
                                )
                            }
                            <div className="relative grow group overflow-hidden">
                                <Image
                                    src={`/${item.image}`}
                                    alt={`${item.image}`}
                                    fill
                                    className="object-cover group-hover:scale-105 duration-300" />
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <div className="flex mt-2 relative">
                <CarouselPrevious className="btn btn--outline" />
                <CarouselNext className="relative translate-x-[125%] btn btn--outline" />
            </div>
        </Carousel>
    )
}