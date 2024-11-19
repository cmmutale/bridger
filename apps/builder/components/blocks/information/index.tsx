import { ComponentConfig } from "@measured/puck";
import createFieldContentful from "@measured/puck-field-contentful";
import ActionRow from "../ui/action-row";

export interface InformationBlockProps {
    copy?: {
        headline: string;
        headlineSize: string;
        body: any;
        bodySize: string
        anchor: string;
    },
    layout?: {
        width: "narrow" | "wide" | "fill";
        height: "" | "container--h-med" | "container--h-tall";
        anchor: string;
        configuration: string;
    },
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

export const InformationBlock: ComponentConfig<any> = {
    label: "Information Block",
    render: ({ copy, layout, action, data }) => (
        <div className={`container ${layout.height}`}>
            <div className="inner space-y-4">
                <div className={`text-heading ${copy.headlineSize}`}>{copy.headline}</div>
                {
                    copy.bodySize && (
                        <p className={`text-p ${copy.bodySize}`}>{copy.body}</p>
                    )
                }
                {
                    action && <ActionRow action={action} />
                }
            </div>
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
                        { label: "Normal", value: "" },
                        { label: "Med", value: "container--h-med" },
                        { label: "Tall", value: "container--h-tall" },
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
                        { label: "Small", value: "text--sm" },
                        { label: "Medium", value: "text--lg" },
                        { label: "Large", value: "text--xl" },
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
    },
    defaultProps: {
        copy: {
            headline: "Here is your text.",
            body: "To edit the page editor for this page, add /edit to the end of the URL path.",
            anchor: "Top left",
            headlineSize: "large",
            bodySize: "medium"
        },
        layout: {
            width: "fill",
            height: "",
            anchor: "left",
        },
        action: [],
    },
}