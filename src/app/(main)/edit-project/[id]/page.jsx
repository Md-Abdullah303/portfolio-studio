import EditProjectForm from '@/components/Form/EditProjectForm';
import { getProjectById } from '@/lib/core/oneProject';
import React from 'react';

const Page = async ({ params }) => {
    const { id } = await params;
    const { project } = await getProjectById(id);
    console.log(project);
    return (
        <div className="">
            <EditProjectForm project={project} />
        </div>
    );
}

export default Page;
