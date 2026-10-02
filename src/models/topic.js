import mongoose, {Schema} from "mongoose"


const topicSchema = new Schema(
    {
        title : String,
        description : String,
        image : String,
        liveLink : String,
        githubLink : String,
        tags : [String],
        challenges : String,
        futureplans : String,
    }
    ,{ timestamps : true}
)

const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema);

export default Topic;