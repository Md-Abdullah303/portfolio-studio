import React from 'react';

const Page = async ({ params }) => {
    const { id } = await params;
    // console.log(id);
    return (
        <div>
            i am project details page : {id}
        </div>
    );
}

export default Page;
