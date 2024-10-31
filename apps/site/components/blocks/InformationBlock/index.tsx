import React from 'react';
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const informationBlockVariants = cva(
    "inner container mx-auto px-4 sm:px-2 flex flex-col gap-4",
    {
        variants: {
            variant: {
                default: "text-left",
                splitPane: "md:flex-row",
                topToDown: "text-center",
                downToTop: "md:flex-col-reverse",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

export interface InformationBlockProps extends VariantProps<typeof informationBlockVariants> { }

const InformationBlock = React.forwardRef<HTMLDivElement, InformationBlockProps & React.HTMLAttributes<HTMLDivElement>>(
    ({ className, variant = "default", ...props }, ref) => (
        <div
            ref={ref}
            {...props}
            className={cn(informationBlockVariants({ variant }), className)}
        />
    )
);

InformationBlock.displayName = "InformationBlock";


// Define a type to include variant prop in child components
interface ChildProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'splitPlane' | 'topToDown' | 'downToTop';
}

const InformationCopyHeading = React.forwardRef<HTMLDivElement, ChildProps>(
    ({ className, variant, ...props }, ref) => (
        <div
            ref={ref}
            {...props}
            className={cn("flex-1 space-y-4", variant === "splitPlane" ? "md:text-right" : "", className)}
        />
    )
);

InformationCopyHeading.displayName = "InformationCopyHeading";

const InformationCopyBody = React.forwardRef<HTMLDivElement, ChildProps>(
    ({ className, variant, ...props }, ref) => (
        <div
            ref={ref}
            {...props}
            className={cn("flex-1 space-y-4", variant === "topToDown" ? "text-center" : "", className)}
        />
    )
);

InformationCopyBody.displayName = "InformationCopyBody";

const InformationActions = React.forwardRef<HTMLDivElement, ChildProps>(
    ({ className, variant, ...props }, ref) => (
        <div
            ref={ref}
            {...props}
            className={cn("flex-1 space-y-4 flex gap-4", variant === "topToDown" ? "justify-center" : "", className)}
        />
    )
);

InformationActions.displayName = "InformationActions";

export { InformationBlock, InformationCopyHeading, InformationCopyBody, InformationActions };