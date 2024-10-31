import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import React from 'react';

const cardBlockVariants = cva(
    "inner container max-w-screen-lg mx-auto px-4 sm:px-2 flex flex-col gap-4",
    {
        variants: {
            variant: {
                default: "md:flex-row",
                rightToLeft: "md:flex-row-reverse",
                topToDown: "md:flex-col space-y-8",
                downToTop: "md:flex-col-reverse",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

export interface CardBlockProps extends VariantProps<typeof cardBlockVariants> { }

const CardBlock = React.forwardRef<HTMLDivElement, CardBlockProps & React.HTMLAttributes<HTMLDivElement>>(
    ({ className, variant = "default", ...props }, ref) => (
        <div
            ref={ref}
            {...props}
            className={cn(cardBlockVariants({ variant }), className)}
        />
    )
);

CardBlock.displayName = "CardBlock";

export default CardBlock;



const CardCopyText = React.forwardRef<HTMLDivElement,
    React.HtmlHTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
        <div
            ref={ref}
            {...props}
            className={`flex-1 space-y-4 ${className}`} />
    ));
CardCopyText.displayName = "CardCopyText"

const CardList = React.forwardRef<HTMLDivElement,
    React.HtmlHTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
        <div
            ref={ref}
            {...props}
            className={`flex-1 space-y-4 ${className}`} />
    ))
CardList.displayName = "CardList"

export { CardBlock, CardCopyText, CardList };
