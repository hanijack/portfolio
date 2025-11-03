import mongoose , {Schema} from "mongoose"



const ProjectSchema = new Schema(
    {
        id:String,
        name:String,
        techn:Array,
        links:Array,
        description: String, 
    }
);


const Project = mongoose.models.Project || mongoose.model("Project" , ProjectSchema);
export default Project;