import { type ComponentConfig } from '@measured/puck'
import styles from './styles.module.css'

export type HeadingProps = {}

const HeadingTemplate: ComponentConfig<any> = {
    label: "Text",
    fields: {
        heading: {
            type: 'text'
        },
        description: {
            type: 'textarea'
        }
    },
    defaultProps: {
        heading: 'Section heading',
        description: 'Short sentence describing details of the section.'
    },
    render: ({ heading, description }) => {
        return (
            <div className={styles.content}>
                <h1 className={styles.heading}>{heading}</h1>
                <p className={styles.text}>{description}</p>
            </div>
        )
    }
}

export const Heading = HeadingTemplate;
