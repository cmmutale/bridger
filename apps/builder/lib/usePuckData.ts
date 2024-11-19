import { useEffect, useState } from "react";

import config from "@/puck.config";
import { Data } from "@measured/puck";

const isBrowser = typeof window !== "undefined";

export const useDemoData = ({
    path,
    isEdit,
}: {
    path: string;
    isEdit: boolean;
}) => {
    const key = `demo-data-${path}`;

    const [pageData] = useState<any>(() => {
        if(isBrowser) {
            const dataStr = localStorage.getItem(key);

            if(dataStr) {
                return JSON.parse(dataStr) as Data;
            }

            return {};
        }
    });


    return { pageData, key }
}