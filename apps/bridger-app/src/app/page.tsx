/**
 * The first page people see when they login to the app.
 * from here users can do a few things:
 * 1. see a list of there projects
 * 2. create a new project
 * 3. navigate to different areas of the app
 *  - account
 *  - projects
 *  - domains
 *  - recent activity
 *  - tutorials and help
 * 
 * in order to do this, the app must have access to a few things:
 * - user account information [User]
 * - projects that belong to the user [Projects]
 * 
 */

import React from 'react'
import { projects } from '~/server/db/schema'
import { db } from '~/server/db'
import { eq } from "drizzle-orm";

export default async function page() {
    const user = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        id: process.env.USER_SEED_ID as string,
    }

    const projectList = await db.select().from(projects).where(eq(projects.userId, user.id))

    return (
        <div className="page-wraper p-24">
            <div className="page-inner">
                <div className="greeting space-y-8">
                    <div className="stack space-y-2">
                        <h1 className='font-bold text-4xl'>Welcome home, {user.name}</h1>
                        <p>Here is what you have been up to recently</p>
                    </div>
                    <div className="project-list">
                        <div className="stack p-4 bg-slate-50 max-w-[600px]">
                            <h4 className='section-title font-bold text-lg'>Projects</h4>
                            <ul className=''>
                                {projectList.map((project) => (
                                    <li key={project.id} className=''>
                                        <a href={`/p/${project.id}`} className='py-2 block hover:underline'>{project.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
