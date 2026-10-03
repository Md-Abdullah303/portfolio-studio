

export const getProjectById = async (id) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/add-project/${id}`)

        if (!res.ok) {
            throw new Error("Failed to fetch project")
        }

        return res.json()
    } catch (error) {
        console.log("Error loading project : ", error);
    }
}

export const allProjects = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/add-project`, {
        cache: "no-store"
    })

    try {
        if (!res.ok) {
            throw new Error("Failed to fetch Projects")
        }

        return res.json()
    } catch (error) {
        console.log("Error loading Projects : ", error);
    }
}