import { DropZone, DefaultRootProps } from "@measured/puck";
import styles from './styles.module.css'

export type RootProps = DefaultRootProps;

function Root({ puck, children }: RootProps) {
    return (
        <div className={`${styles.container} ${styles.pageWrapper}`}>
            {children}
        </div>
    );
}

export default Root;
