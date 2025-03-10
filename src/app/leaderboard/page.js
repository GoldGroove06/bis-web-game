import LeaderboardCard from "@/components/LeaderboardCard";
import { Heading } from "@radix-ui/themes";
import React from "react";

function Leaderboard() {
  const list = [
    {
      name: "Arsh",
      score: 10,
    },
    {
      name: "Arsh",
      score: 10,
    },
    {
      name: "Arsh",
      score: 10,
    },
    {
      name: "Arsh",
      score: 10,
    },
    {
      name: "Arsh",
      score: 10,
    },
    {
      name: "Arsh",
      score: 10,
    },
  ];

  return (
    <div className="z-30 absolute bg-white/10 backdrop-blur-lg border border-green-500 !p-6 rounded-lg shadow-lg w-[40rem] text-center">
      
      {/* Leaderboard Heading */}
      <h2 className="text-green-300 text-4xl font-extrabold mb-6">🏆 Leaderboard</h2>
  
      {/* Leaderboard List */}
      <div className="bg-green-900/20 p-4 rounded-lg border-l-4 border-green-500 shadow-md">
        {list.map((item, index) => (
          <LeaderboardCard 
            name={item.name} 
            score={item.score} 
            key={index} 
            className="bg-white/5 p-3 my-2 rounded-lg shadow-md"
          />
        ))}
      </div>  

    </div>
    
  );
  
}

export default Leaderboard;
