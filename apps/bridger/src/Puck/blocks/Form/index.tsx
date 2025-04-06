import { type ComponentConfig } from "@measured/puck";
import styles from "./styles.module.css"

export type FormProps = {}

const FormTemplate: ComponentConfig<any> = {
    label: "Form",
    fields: {},
    defaultProps: {},
    render: () => {
        return (
            <div>
                <form action="">
                </form>
            </div>
        )
    }
}

export const Form = FormTemplate;
