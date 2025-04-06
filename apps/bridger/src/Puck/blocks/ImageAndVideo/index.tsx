import { type ComponentConfig } from '@measured/puck'
import styles from './styles.module.css'
import imageData from "@/templates/data/imageData.json"

export type ImageAndVideoProps = {}

const ImageAndVideoTemplate: ComponentConfig<any> = {
    label: "Media",
    fields: {
        image1: {
            type: 'external',
            fetchList: async () => {
                // fetch the data
                // console.log(imageData.data)
                const data = imageData.data.map(image => {
                    return {
                        title: image.fileName,
                        description: image.url
                    }
                })
                console.log(data)
                return data;
            }
        },
    },
    defaultProps: {
        // image1: '',
    },
    render: ({ image1 }) => {
        return (
            <div className={styles.content}>
                <img src={image1?.description || "please select an images"} alt="" className='w-full h-96' />
            </div>
        )
    }
}

export const ImageAndVideo = ImageAndVideoTemplate;
