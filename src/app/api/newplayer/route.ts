import { NextRequest, NextResponse } from "next/server";
import Leaderboard from '../../../../models/Leaderboard'
import { HttpStatusCode } from "axios";
import connectMongo from "../../../../util/connect-mongo";

export async function POST(req: NextRequest) {
    try {
        await connectMongo();
        const body = await req.json()

        const { name, score } = body;
        if (!name || !score) {
            return NextResponse.json(
                { success: false, message: "Missing required fields" },
                { status: HttpStatusCode.BadRequest }
            );
        }
        const newPlayer = new Leaderboard({
            name: name,
            score: score
        });

        await Leaderboard.create(newPlayer)
        return NextResponse.json({ status: HttpStatusCode.Created, });

        }
    catch (error) {
    console.error("GET Error:", error);
    return NextResponse.json(
        { success: false, message: "Internal Server Error" },
        { status: HttpStatusCode.InternalServerError }
    );
}
}
