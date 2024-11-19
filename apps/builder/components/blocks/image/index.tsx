import { ComponentConfig } from "@measured/puck";
import Image from "next/image";
import ActionRow from "../ui/action-row";

export interface ImageBlockProps {
    copy?: {
        headline: string;
        body: any;
        anchor: string;
    };
    layout?: {
        width: "narrow" | "wide" | "fill";
        height: "short" | "tall" | "fill";
        anchor: string;
        configuration: string;
    };
    action: {
        label: string;
        type: string;
        url: string;
        page: string;
    }[];
    styling?: {
        backgroundColor: string;
        textColor: string;
    };
}

export const ImageBlock: ComponentConfig<any> = {
    label: "Image Block",
    render: ({ copy, layout, action }) => {
        return (
            <section
                className="wrapper relative w-full py-12">
                <div className="inner container mx-auto flex flex-wrap sm:flex-nowrap min-h-[500px] bg-accent">
                    <div className="image w-full sm:w-1/2 relative aspect-video">
                        <Image
                            fill={true}
                            alt=""
                            src={`/woman_hotair_placeholder.jpg`}
                            className="object-cover" />
                    </div>
                    <div className="content w-full sm:w-1/2 p-4 sm:p-16 space-y-4 flex flex-col items-start justify-center">
                        <div>
                            <h1 className="font-bold text-4xl sm:text-6xl leading-none mb-6">{copy.headline}</h1>
                            <p className="leading-tight max-w-[65ch]">{copy.body}</p>
                        </div>
                        {
                            action && <ActionRow action={action} />
                        }
                    </div>
                </div>
                <div className="inner container mx-auto flex flex-col bg-accent">
                    <div className="image w-full h-[40vh] relative">
                        <Image
                            fill={true}
                            alt=""
                            src={`/woman_hotair_placeholder.jpg`}
                            className="object-cover" />
                    </div>
                    <div className="content w-full grow flex flex-col items-start justify-start gap-8
                    p-4 sm:p-16 max-sm:!w-full">
                        <div className="w-full">
                            <h1 className="font-bold text-4xl sm:text-6xl leading-none mb-6">{copy.headline}</h1>
                            <p className="leading-tight max-w-[65ch]">{copy.body}</p>
                        </div>
                        {
                            action && <ActionRow action={action} />
                        }
                    </div>
                </div>
            </section>
        );
    },
    fields: {
        layout: {
            label: "Layout",
            type: "object",
            objectFields: {
                width: {
                    label: "Width",
                    type: "radio",
                    options: [
                        { label: "Narrow", value: "narrow" },
                        { label: "Wide", value: "wide" },
                        { label: "Fill", value: "fill" },
                    ],
                },
                height: {
                    label: "Height",
                    type: "radio",
                    options: [
                        { label: "Short", value: "short" },
                        { label: "Tall", value: "tall" },
                        { label: "Fill", value: "fill" },
                    ],
                },
                anchor: {
                    label: "Anchor",
                    type: "select",
                    options: [
                        { label: "Left", value: "left" },
                        { label: "Middle", value: "mid" },
                        { label: "Right", value: "right" },
                        // { label: "Middle left", value: "Mid left" },
                        // { label: "Middle", value: "Mid" },
                        // { label: "Middle Right", value: "Mid right" },
                        // { label: "Bottom left", value: "Bottom left" },
                        // { label: "Bottom", value: "Bottom" },
                        // { label: "Bottom Right", value: "Bottom right" },
                    ],
                },
            },
        },
        copy: {
            label: "Copy",
            type: "object",
            objectFields: {
                headline: {
                    label: "Headline",
                    type: "text",
                },
                // body: createFieldContentful("Page", {
                //     space: "Development",
                //     accessToken: "RhZ3SOdbBoSvkvTkKSgObU1RS4NW16eeSZTkqyu2zpI"
                // })
                body: {
                    label: "Body",
                    type: "textarea",
                },
                anchor: {
                    label: "Anchor",
                    type: "select",
                    options: [
                        { label: "Top left", value: "Top left" },
                        { label: "Top", value: "Top" },
                        { label: "Top Right", value: "Top right" },
                        { label: "Middle left", value: "Mid left" },
                        { label: "Middle", value: "Mid" },
                        { label: "Middle Right", value: "Mid right" },
                        { label: "Bottom left", value: "Bottom left" },
                        { label: "Bottom", value: "Bottom" },
                        { label: "Bottom Right", value: "Bottom right" },
                    ],
                },
            }
        },
        action: {
            label: "Actions",
            type: "array",
            arrayFields: {
                label: {
                    label: "Label",
                    type: "text",
                },
                type: {
                    label: "Type",
                    type: "select",
                    options: [
                        { label: "Button", value: "button" },
                        { label: "Link", value: "link" },
                    ],
                },
                url: {
                    label: "URL",
                    type: "text",
                },
                page: {
                    label: "Page",
                    type: "select",
                    options: [
                        { label: "Home", value: "page" },
                        { label: "About", value: "about" },
                    ],
                },
            },
        }
    },
    defaultProps: {
        copy: {
            headline: "Here is your text.",
            body: "To edit the page editor for this page, add /edit to the end of the URL path.",
            anchor: "Top left"
        },
        layout: {
            width: "fill",
            height: "short",
            anchor: "left",
        },
    }
}