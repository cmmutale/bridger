/**
 * Access the id from the slug on this page
 * From here you have access to:
 * - List of pages in the project
 * - General settings (domain name, project name, description, access)
 * - Navigation to pages for editing
 * - Ability to create new pages
 * - Access to project data CRM (data collected from project inputs)
 */

import React from 'react';
import { projects, pages } from '~/server/db/schema';
import { db } from '~/server/db';
import { eq } from 'drizzle-orm';

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const [project] = await db.select().from(projects).where(eq(projects.id, id));
    const pagesList = await db.select().from(pages).where(eq(pages.projectId, id));

    if (!project) {
        return (
            <div className="page-wrappe">
                <div className="page-inner">
                    <div className="greeting space-y-8">
                        <div className="stack space-y-2">
                            <h1 className="font-bold text-4xl">Project not found</h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="page-wrapper p-24">
            <div className="page-inner">
                <div className="greeting space-y-8">
                    <div className="stack space-y-2">
                        <h1 className="font-bold text-4xl">{project.name}</h1>
                        <p>{project.description}</p>
                    </div>
                    <div className="project-list">
                        <div className="stack p-4 bg-slate-50 max-w-[600px]">
                            <h4 className="section-title font-bold text-lg">Pages</h4>
                            <ul>
                                {pagesList?.map((page) => (
                                    <li key={page.id}>
                                        <a
                                            href={`/p/${project.id}/e/${page.id}`}
                                            className="py-2 block hover:underline"
                                        >
                                            {page.title}
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