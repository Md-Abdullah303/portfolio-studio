import connectMongoDB from "@/lib/mongodb";
import AddProject from "@/models/topic";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
    const { id } = await params;
    const {
        newTitle: title,
        newDescription: description,
        newCategory: category,
        newImgLink: imgLink,
        newLiveLink: liveLink,
        newGithubLink: githubLink,
        newTags: tags,
        newChallenges: challenges,
        newFutureplans: futureplans,
    } = await request.json()
    await connectMongoDB()
    await AddProject.findByIdAndUpdate(id, {
        title,
        description,
        category,
        imgLink,
        liveLink,
        githubLink,
        tags,
        challenges,
        futureplans,
    })
    return NextResponse.json({ message: "Project Updated" }, { status: 200 })
}

export async function GET(request, { params }) {
    const { id } = await params;
    await connectMongoDB()
    const project = await AddProject.findById({ _id: id })
    return NextResponse.json({ project })
}

export async function PATCH(request, { params }) {
    const { id } = await params;
    const updatedData = await request.json()
    await connectMongoDB()
    await AddProject.findByIdAndUpdate(id, updatedData, { new: true })
    return NextResponse.json({ message: "Project Updated" }, { status: 200 })
}

export async function DELETE(request, { params }) {
    const { id } = await params;
    await connectMongoDB()
    await AddProject.findByIdAndDelete({ _id: id })
    return NextResponse.json({ message: "Project Deleted" }, { status: 200 })
}