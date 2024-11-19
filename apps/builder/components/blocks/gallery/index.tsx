import { ComponentConfig } from "@measured/puck";
// import createFieldContentful from "@measured/puck-field-contentful";
import ActionRow from "../ui/action-row";
import Swiperjs from "./swiperjs";

export interface GalleryBlockProps {
    copy?: {
        headline: string;
        headlineSize: string;
        body: string;
        bodySize: string
        anchor: string;
    },
    layout?: {
        width: "narrow" | "wide" | "fill";
        height: "short" | "tall" | "fill";
        anchor: string;
        configuration: string;
    },
    cardsPerView?: number;
    cards?: {
        title: string;
        body: string;
        image: string;
        action: {
            label: string;
            href: string;
        }
    }[];
    action: {
        label: string;
        type: string;
        url: string;
        page: string;
    }[];
    styling?: {
        backgroundColor: string;
        textColor: string;
    }
}

export const GalleryBlock: ComponentConfig<any> = {
    label: "Gallery Block",
    render: ({ copy, layout, action, cards }) => (
        <div className="box">
            <section className={`container ${layout.height}`}>
                <div className="inner space-y-4">
                    <div>
                        <h3 className={`${copy.headlineSize}`}>{copy.headline}</h3>
                        <p className={`${copy.bodySize}`}>{copy.body}</p>
                    </div>
                    {
                        action && <ActionRow action={action} />
                    }
                </div>
            </section>
            {
                cards && (
                    <div className="">
                        <Swiperjs slideItems={cards} />
                    </div>
                )
            }

        </div>
    ),
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
                headlineSize: {
                    label: "Headline Size", type: "select", options: [
                        { label: "Small", value: "text--h-3" },
                        { label: "Medium", value: "text--h-2" },
                        { label: "Large", value: "text--h-1" },
                    ]
                },
                // body: createFieldContentful("Page", {
                //     space: "Development",
                //     accessToken: "RhZ3SOdbBoSvkvTkKSgObU1RS4NW16eeSZTkqyu2zpI"
                // })
                body: {
                    label: "Body",
                    type: "textarea",
                },
                bodySize: {
                    label: "Body Size", type: "select", options: [
                        { label: "Small", value: "text--xl" },
                        { label: "Medium", value: "text--xl" },
                        { label: "Large", value: "text--xxl" },
                    ]
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
        },
        cards: {
            label: "Cards",
            type: "array",
            arrayFields: {
                title: {
                    label: "Title",
                    type: "text",
                },
                body: {
                    label: "Body",
                    type: "textarea",
                },
                image: {
                    label: "Image",
                    type: "text",
                },
                action: {
                    label: "Action",
                    type: "object",
                    objectFields: {
                        label: {
                            label: "Label",
                            type: "text",
                        },
                        href: {
                            label: "Href",
                            type: "text",
                        },
                    }
                }
            }
        },
        cardsPerView: {
            label: "Cards per view",
            type: "number",
        },
        styling: {
            label: "Styling",
            type: "object",
            objectFields: {
                backgroundColor: {
                    label: "Background color",
                    type: "text",
                },
                textColor: {
                    label: "Text color",
                    type: "text",
                },
            },
        },
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
        action: [],
        cards: [],
        cardsPerView: 3,
    },
}