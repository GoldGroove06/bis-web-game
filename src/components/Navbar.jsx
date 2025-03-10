"use client"
import { Button } from "@radix-ui/themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [curLeader, setCurLeader] = useState("");
  const [curScore, setCurScore] = useState(0);
  const router = useRouter();
  
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
    setCurLeader(data[0].name)
    setCurScore(data[0].score)
  }
  fethData();    
  }, [])
  
  const handleReset =  () => { 
    localStorage.removeItem("score");
    localStorage.removeItem("name");
    router.push("/");
  }

  return (
    <div className="fixed w-full bg-white/10 backdrop-blur-lg border-b border-white/10 z-40 top-0 py-4 px-8 flex justify-between items-center h-18 text-green-300 mx-2 !p-2 mb-2">
    
      <h1
        className="text-2xl font-bold cursor-pointer hover:underline transition-colors duration-300 " 
        
     >
       <Link href="/">BIS game</Link> 
      </h1>

      <h2>
       <Link href="/leaderboard" > Current Leader : 🏆 {curScore} {curLeader}   </Link>
      </h2>
      <Button onClick={handleReset}>Reset Game</Button>
      </div>

  );
}