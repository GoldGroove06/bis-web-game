import {NextRequest, NextResponse} from "next/server";
import Leaderboard from '../../../../models/Leaderboard'
import { HttpStatusCode } from "axios";
import connectMongo from "../../../../util/connect-mongo";

export async function GET(req: NextRequest) {
    try {
        await connectMongo();
    
        const board = await Leaderboard.find().sort({ score: -1 });
      if (board) {
        return NextResponse.json({
          
           ...board
       })
      }
        
      else {
        return NextResponse.json({
        success: false,
        message: "No leaderboard found"
    })
  }
}catch (error) {
console.error("GET Error:", error);
return NextResponse.json(
  { success: false, message: "Internal Server Error" },
  { status: HttpStatusCode.InternalServerError }
);
}
}
