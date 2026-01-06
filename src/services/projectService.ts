import connectMong from "@/libs/mongodb";
import Project from "@/models/project";
import { Types } from "mongoose";

export type ProjectDTO = {
  _id: string;
  name: string;
  description?: string;
  techn?: string[];
  links?: string[];
};
export type ProjectSummaryDTO = {
  _id: string;
  name: string;
  techn?: string[];
  links?: string[];
};

export async function getAllProjectsFromDb(): Promise<ProjectSummaryDTO[]> {
   await connectMong();
  const projects = await Project.find()
    .select("_id name techn links")
    .lean()
    .exec();
  return projects as unknown as ProjectSummaryDTO[];

}

export async function getProjectFromDb(id: string): Promise<ProjectDTO | null> {
  if (!Types.ObjectId.isValid(id)) return null;
  await connectMong();
  return Project.findById(id).select("_id name description techn links ").lean<ProjectDTO>()
.exec();
}