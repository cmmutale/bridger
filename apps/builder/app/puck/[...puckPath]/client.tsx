"use client";

import type { Data } from "@measured/puck";
import { Puck } from "@measured/puck";
import config from "../../../puck.config";
import { useToast } from "@/hooks/use-toast"
import { ToastAction } from "@/components/ui/toast";
// import Link from "next/link";
import { Button } from "@measured/puck";
import { useDemoData } from "@/lib/usePuckData";


export function Client({ path, data }: { path: string; data?: Partial<Data> }) {
    const { toast } = useToast();
    const { pageData, key } = useDemoData({
        path,
        isEdit: true
    });
    const saveData = (data: Data) => {
        localStorage.setItem(key, JSON.stringify(data));
        // console.log("SAVED DATA--------------->", data)
    }

    return (
        <Puck
            config={config}
            data={pageData}
            overrides={{
                headerActions: ({ children }) => {
                    return (
                        <>
                            <Button href={path} variant="secondary" newTab>View page</Button>
                            {children}
                        </>
                    )
                }
            }}
            onPublish={async (data) => {
                // await fetch("/puck/api", {
                //     method: "post",
                //     body: JSON.stringify({ data, path }),
                // });
                saveData(data);
                toast({
                    title: "Site Published",
                    description: "Your changes have been published.",
                    action: <ToastAction altText="Undo changes">Undo</ToastAction>,
                    variant: "default"
                });
            }}
        />
    );
}