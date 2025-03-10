"use client";
import LeaderboardCard from "@/components/LeaderboardCard";
import { Heading } from "@radix-ui/themes";
import { set } from "mongoose";
import React from "react";
import { useEffect, useState } from "react"

function Leaderboard() {
  const [list, setList] = useState([]);
  const [loaded, setLoaded] = useState(false);
   useEffect(  () => {
      const fethData = async () => {
      const res =  await fetch("/api/leaderboard",{
        method:"GET",
        headers:{
          "Content-Type":"application/json"
        }
      })
      const data = await res.json()
      console.log(data)
      setList(data)
      setLoaded(true)
     
    }
    fethData();    
    }, [])

  if (!loaded) return <div>Loading...</div>;
  
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
