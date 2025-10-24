
import { NextResponse } from "next/server";
import { getProjectFromDb } from "@/services/projectService";
type Params = { id: string };
export async function GET(_req: Request, { params }: { params: Promise<Params> }
) {
  const {id }= await params
  const project = await getProjectFromDb(id);
  if (!project) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(project);
}