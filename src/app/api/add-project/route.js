import connectMongoDB from "@/lib/mongodb";
import AddProject from "@/models/topic";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { title, description, category, imgLink, liveLink, githubLink, tags, challenges, futureplans } = await request.json();
    await connectMongoDB();
    await AddProject.create({ title, description, category, imgLink, liveLink, githubLink, tags, challenges, futureplans });
    return NextResponse.json({ message: "New Project Added." }, { status: 200 })
}


export async function GET() {
    await connectMongoDB();
    const projects = await AddProject.find()
    return NextResponse.json({ projects })
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id")
    await connectMongoDB()
    await AddProject.findByIdAndDelete(id)
    return NextResponse.json({ message: "Project Deleted" }, { status: 200 })
}