import mongoose , {Schema} from "mongoose"



const ProjectSchema = new Schema(
    {
        id:String,
        name:String,
        imgUrl:String,
        techn:Array,
        links:Array,
    }
);


const Project = mongoose.models.Project || mongoose.model("Project" , ProjectSchema);
export default Project;