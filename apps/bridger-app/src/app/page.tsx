/**
 * The first page people see when they login to the app.
 * From here users can:
 * 1. See a list of their projects
 * 2. Create a new project
 * 3. Navigate to different areas of the app:
 *    - Account
 *    - Projects
 *    - Domains
 *    - Recent activity
 *    - Tutorials and help
 * 
 * Requirements:
 * - User account information [User]
 * - Projects that belong to the user [Projects]
 */

import React from 'react';
import { projects } from '~/server/db/schema';
import { db } from '~/server/db';
import { eq } from 'drizzle-orm';

export default async function Page() {
    const user = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        id: process.env.USER_SEED_ID!,
    };

    const projectList = await db.select().from(projects).where(eq(projects.userId, user.id));

    return (
        <div className="page-wrapper p-24">
            <div className="page-inner">
                <div className="greeting space-y-8">
                    <div className="stack space-y-2">
                        <h1 className="font-bold text-4xl">Welcome home, {user.name}</h1>
                        <p>Here is what you have been up to recently</p>
                    </div>
                    <div className="project-list">
                        <div className="stack p-4 bg-slate-50 max-w-[600px]">
                            <h4 className="section-title font-bold text-lg">Projects</h4>
                            <ul>
                                {projectList.map((project) => (
                                    <li key={project.id}>
                                        <a 
                                            href={`/p/${project.id}`} 
                                            className="py-2 block hover:underline"
                                        >
                                            {project.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}