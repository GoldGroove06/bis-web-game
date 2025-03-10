"use client"

import React from 'react';
import Link from "next/link";
import { useState, useEffect } from "react";
import tut from "../../../../assets/tut.jpg";
import missads from "../../../../assets/missads.jpg";
import realfake from "../../../../assets/realfake.jpg";
import compform from "../../../../assets/compform.jpg";
import Tutorial from "@/components/Tutorial";


function Tutorial2() {
    const [name, setName] = useState(undefined);
    

    useEffect(() => {
        const storedName = localStorage.getItem("name");
        if (storedName) setName(storedName);
      }, []);

      const tutData = [
        {
          content: `1. Why Consumer Awareness Matters?\n\nEvery day, millions of consumers fall victim to fake products,\n\n misleading ads, and unfair trade practices.\n\n Knowing your rights can help you stay safe!`,
          img: missads,
        },
        {
          content: `2. How to Spot Fake Products?\n\n• What to do if you get scammed\n• How to use consumer rights to your\n advantage`,
          img: realfake,
        },
        {
          content: `3. What to Do If You Get Scammed?\n\nIf you receive a fake or defective product:\n\n• Ask for a refund or replacement from\n the seller\n• File a complaint on the National Consumer \n Helpline (NCH) website\n• Report counterfeit products to \nBIS / FSSAI / relevant authorities\n`,
          img: compform,
        }
        
      ];
      
      return (
        <div className="z-30 absolute bg-white/10 backdrop-blur-lg border border-white/20 w-96 text-center !p-6 rounded-2xl shadow-lg">
          <h2 className="font-bold text-3xl text-green-300 mb-4">Know Your Consumer Rights! 🛍️⚖️</h2>
          
          <p className="text-white text-lg mb-4 ">
          
          Do you know your rights as a consumer? <br/>
           Test your knowledge with this interactive quiz!<br/>
            Learn how to make informed choices, protect yourself from unfair practices, and shop with confidence. 
          <br/>
          Are you ready? Let’s begin! 
          </p>
      
          {/* <div className="text-white text-left mb-6 space-y-2">
            <p className="font-semibold">👉 Learn how to move, attack, and interact with the world.</p>
            <p className="font-semibold">💎 Discover special abilities and power-ups.</p>
            <p className="font-semibold">⭐ Get tips on surviving and winning!</p>
          </div> */}
      
          <Tutorial tutData={tutData} redirect="/quiz/game" />
      
          {/* <p className="text-white text-lg mt-4">{name}</p> */}
      
          {/* <Link href={"/fake-detector/game"}>
            <button className="">
               Tutorial Complete
            </button>
          </Link> */}
        </div>
      );
      
}

export default Tutorial2;