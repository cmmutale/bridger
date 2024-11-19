import type { Config } from "@measured/puck";
import { InformationBlock } from "./components/blocks/information";
import { CardsBlock } from "./components/blocks/cards";
import { ImageBlock } from "./components/blocks/image";
import { GalleryBlock } from "./components/blocks/gallery";
import Footer from "./components/blocks/ui/footer";
import Header from "./components/blocks/ui/header";

import "@/app/styles/site/container.css";
import "@/app/styles/site/text.css";
import "@/app/styles/site/button.css";
import "@/app/styles/site/navigation.css";
import "@/app/styles/site/footer.css";


type Props = {
    InformationBlock: any;
    CardBlock: any;
    ImageBlock: any;
    GalleryBlock: any;
};

export const config: Config<Props> = {
    components: {
        InformationBlock: InformationBlock,
        CardBlock: CardsBlock,
        ImageBlock: ImageBlock,
        GalleryBlock: GalleryBlock,
    },
    root: {
        render: ({ children }) => {
            return (
                <div className="container--body">
                    <div className="container--body-inner">
                        <Header />
                        {children}
                        <Footer />
                    </div>
                </div>
            );
        },
    }
};

export default config;