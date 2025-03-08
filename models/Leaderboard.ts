import { model, models, Schema } from 'mongoose';


const LeaderboardSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
        lowercase: true,
    },
    
    score: {
        type: Number,
        required: true,
    },
}, {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
});

const Leaderboard = models.Leaderboard || model('Leaderboard', LeaderboardSchema);

export default Leaderboard;
