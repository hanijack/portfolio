import { NextRequest, NextResponse } from "next/server";
import connectMong from "@/libs/mongodb";
import Email from "@/models/email";

export async function POST(req: NextRequest) {
    const { name, email, message } = await req.json();
    await connectMong();
    await Email.create({ name, email, message });

    return NextResponse.json({ message: "Email sent successfuly " },{status:200});
}
