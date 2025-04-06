/**
 * grab the page data and pass it a client component.
 * page edits will happen on client side
 */
import { db } from '~/server/db';
import { pages } from "~/server/db/schema";
import { eq } from 'drizzle-orm';
import { Editor } from '~/puck/editor';
import type { Data } from '@measured/puck';

export default async function page({ params, }: { params: Promise<{ pageId: string }> }) {
    const { pageId } = await params;

    const page = await db.select().from(pages).where(eq(pages.id, pageId));

    return (
        <Editor data={page[0]!.content as Data} />
    )
}
