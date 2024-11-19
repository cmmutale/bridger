"use client";

import type { Data } from "@measured/puck";
import { Render } from "@measured/puck";
import config from "../../puck.config";
import { useDemoData } from "@/lib/usePuckData";

export function Client({ data, path }: { data?: Data, path: string }) {
    const {pageData} = useDemoData({
        path,
        isEdit: false
    });
    return <Render config={config} data={pageData} />;
}