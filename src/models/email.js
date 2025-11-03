import mongoose , {Schema} from "mongoose";

const EmailSchema= new Schema(
    {
        name:String,
        email:String,
        message:String
    }
);

const Email = mongoose.models.Email || mongoose.model("Email" , EmailSchema)

export default Email