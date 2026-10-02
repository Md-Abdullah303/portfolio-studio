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
    }
    , { timestamps: true }
)

const AddProject = mongoose.models.AddProject || mongoose.model("AddProject", topicSchema);

export default AddProject;