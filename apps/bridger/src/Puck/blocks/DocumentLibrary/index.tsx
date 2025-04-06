import { type ComponentConfig } from '@measured/puck'
import styles from './styles.module.css'

export type DocumentLibraryProps = {}

const DocumentLibraryTemplate: ComponentConfig<any> = {
    label: "Document Library",
    fields: {
        label: {
            type: 'text'
        },
    },
    defaultProps: {
        label: 'upload document',
    },
    render: ({ label }) => {
        return (
            <div className={styles.content}>
                <p className={styles.heading}>{label}</p>
            </div>
        )
    }
}

export const DocumentLibrary = DocumentLibraryTemplate;
