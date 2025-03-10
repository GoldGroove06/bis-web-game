import { model, models, Schema, Document, Model } from "mongoose";

// Define an interface for the leaderboard document
interface ILeaderboard extends Document {
  name: string;
  score: number;
}

// Define the Mongoose schema
const LeaderboardSchema = new Schema<ILeaderboard>(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      lowercase: true,
    },
    score: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt
  }
);

// Define the model with proper TypeScript typing
const Leaderboard: Model<ILeaderboard> =
  models.Leaderboard || model<ILeaderboard>("Leaderboard", LeaderboardSchema);

export default Leaderboard;

