"use client";

import { Render } from "@measured/puck";
import config from "../../puck.config";
import { useDemoData } from "@/lib/usePuckData";

export function Client({ path }: { path: string }) {
    const { pageData } = useDemoData({
        path,
        isEdit: false
    });

    // console.log('PAGEPATH-------->', path);

    if (!pageData) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Render config={config} data={pageData} />
        </>
    );
}