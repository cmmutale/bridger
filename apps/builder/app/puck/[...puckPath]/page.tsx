import "@measured/puck/puck.css";
import { Client } from "./client";
import { Metadata } from "next";
import { getPage } from "../../../lib/get-page";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ puckPath: string[] }>;
}): Promise<Metadata> {
    let path;
    const puckPath = (await params).puckPath;

    if (!puckPath) {
        path = '/';
    } else {
        path = `/${puckPath.join("/")}`;
    }

    return {
        title: `Nodedrop demo builder - ${path}`,
    };
}

export default async function Page({
    params,
}: {
    params: Promise<{ puckPath: string[] }>;
}) {
    let path;
    const puckPath = (await params).puckPath;

    if (!puckPath) {
        path = '/';
    } else {
        path = `/${puckPath.join("/")}`;
    }

    return (
        <>
            <Client path={path} data={{}} />
            {/* <div>Hello</div> */}
        </>
    );
}

export const dynamic = "force-dynamic";