import { type Config } from "@measured/puck";
import Root from "./root/root";
import { Heading } from "./blocks/Heading";
import { ImageAndVideo } from "./blocks/ImageAndVideo";
import { DocumentLibrary } from "./blocks/DocumentLibrary";

type Props = {
    Heading: any,
    ImageAndVideo: any,
    DocumentLibrary: any
}

export const PuckConfig: Config<Props> = {
    root: {
        render: Root,
    },
    components: {
        Heading,
        ImageAndVideo,
        DocumentLibrary
    }
}

export default PuckConfig;
