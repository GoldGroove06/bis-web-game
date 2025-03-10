"use client"
import { Button } from "@radix-ui/themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "../../assets/logo.jpg";

export default function Navbar() {
  const [curLeader, setCurLeader] = useState("");
  const [curScore, setCurScore] = useState(0);
  const router = useRouter();
  
  const fetchData = async () => {
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

  useEffect(  () => {
  fetchData();    
  }, [])
  
  useEffect(() => {
    if (router.pathname === "/leaderboard") {
      fetchData();
    }
  }, [router.pathname]);

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
      
       <Link href="/" className="flex flex-row items-center"><Image src={logo} alt="BIS Logo" width={50} height={50} />Smart Consumer- ILP</Link> 
      </h1>

      <h2>
       <Link href="/leaderboard" > Current Leader : 🏆 {curScore} {curLeader}   </Link>
      </h2>
      <div >
      <Link href="/about" className="!m-2"><Button >About Team</Button></Link>
      <Button onClick={handleReset}>Reset Game</Button>
      </div>
      </div>

  );
}