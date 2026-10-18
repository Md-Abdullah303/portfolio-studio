import mongoose, { Schema } from "mongoose"


const topicSchema = new Schema(
    {
        title: String,
        description: String,
        category: String,
        imgLink: String,
        liveLink: String,
        githubLink: String,
        tags: [String],
        challenges: String,
        futureplans: String,
        priority: {
            type: Number,
            default: 0
        },
    }
    , { timestamps: true, strict: false }
)

if (mongoose.models && mongoose.models.AddProject) {
    delete mongoose.models.AddProject;
}

const AddProject = mongoose.model("AddProject", topicSchema);

export default AddProject;