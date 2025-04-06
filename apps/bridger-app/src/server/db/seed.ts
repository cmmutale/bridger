import 'dotenv/config'; // ✅ must come first

import { db, client } from "."; // or wherever your db instance is
import { posts, projects, pages, domains } from "./schema";
import { eq } from "drizzle-orm";

async function main() {
    console.log("Loaded DATABASE_URL:", process.env.DATABASE_URL); // ✅ debug line

    const post: typeof posts.$inferInsert = {
        name: "Hello, world",
    };
    await db.insert(posts).values(post);

    const project: typeof projects.$inferInsert = {
        userId: process.env.USER_SEED_ID!,
        name: "Project Alpha",
        description: "This is portal was built with Bridger.",
    };
    await db.insert(projects).values(project);

    // retrieve id of project with name = 'Project Alpha'
    const projectAlpha = await db.select().from(projects).where(eq(projects.name, "Project Alpha"));

    const page: typeof pages.$inferInsert = {
        projectId: projectAlpha[0]!.id,
        title: "Home",
        slug: "/",
        isRootpage: true,
        description: "This is the opening page of this portal.",
        content: {}
    };
    await db.insert(pages).values(page);

    console.log("database seeded!!!");
}

// Properly handle the promise chain
void (async () => {
    try {
        await main();
    } catch (err) {
        console.error("seeding failed: ", err);
        process.exit(1);
    } finally {
        await client.end(); // close db client connection
    }
})();
