
import { NextResponse } from "next/server";
import { getAllProjectsFromDb } from "@/services/projectService";

export async function GET() {
  try {
    const projects = await getAllProjectsFromDb();
    return NextResponse.json(projects);
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}