import { Client } from "./client";
import { Metadata } from "next";

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
        title: `Nodedrop demo - ${path}`,
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
        <Client path={path} />
    );
}

export const dynamic = "force-static";
