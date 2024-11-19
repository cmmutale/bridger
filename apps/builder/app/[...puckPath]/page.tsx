import { Client } from "./client";
// import { Metadata } from "next";

// export async function generateMetadata({
//     params: { puckPath = [] },
// }: {
//     params: { puckPath: string[] };
// }): Promise<Metadata> {
//     const path = `/${puckPath.join("/")}`;

//     return {
//         title: path,
//     };
// }

export default async function Page({
    params,
}: {
    params: Promise<{ puckPath: string[] }>;
}) {
    const puckPath = (await params).puckPath;
    if (!puckPath) {
        return <div>Not found</div>;
    }
    const path = `/${puckPath.join("/")}`;

    return <Client path={path} />;
}

export const dynamic = "force-static";
