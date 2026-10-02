import connectMongoDB from "@/lib/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { title, description, image, liveLink, githubLink, tags, challenges, futureplans } = await request.json();
    await connectMongoDB();
    await Topic.create({ title, description, image, liveLink, githubLink, tags, challenges, futureplans });
    return NextResponse.json({ message: "Topic Created" }, { status: 200 })
}
