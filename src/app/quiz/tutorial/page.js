"use client"

import React from 'react';
import Link from "next/link";
import { useState, useEffect } from "react";
import tut from "../../../../assets/tut.jpg";
import Tutorial from "@/components/Tutorial";


function Tutorial2() {
    const [name, setName] = useState(undefined);
    

    useEffect(() => {
        const storedName = localStorage.getItem("name");
        if (storedName) setName(storedName);
      }, []);

      const tutData = [
        {
          content: "1.Why Consumer Awareness Matters? Every day, millions of consumers fall victim to fake products, misleading ads, and unfair trade practices. Knowing your rights can help you stay safe!",
          img: tut,
        },
        {
          content: "2.How to spot fake products,What to do if you get scammed How to use consumer rights to your advantage",
          img: tut,
        },
        {
          content: "3. What to Do If You Get Scammed? If you receive a fake or defective product: 1️⃣ Ask for a refund or replacement from the seller 2️⃣ File a complaint on the National Consumer Helpline (NCH) website 3️⃣ Report counterfeit products to BIS / FSSAI / relevant authorities 4️⃣ Spread awareness to help others avoid scams",
          img: tut,
        },
        {
          content: "4.Before buying any product, always check for: ✅ ISI, Hallmark, or FSSAI Certification ✅ Correct Brand Name & Packaging ✅ Authorized Seller & Warranty ✅ Fair Market Pricing (Beware of Unrealistic Discounts!)",
          img: tut,
        },
      ];
      
      return (
        <div className="z-30 absolute bg-white/10 backdrop-blur-lg border border-white/20 w-96 text-center p-6 rounded-2xl shadow-lg">
          <h2 className="font-bold text-3xl text-green-300 mb-4">Welcome to the Adventure!</h2>
          
          <p className="text-white text-sm mb-4">
            Before you dive into the action, let's get you familiar with the basics.
            This tutorial will guide you through the controls, mechanics, and essential strategies 
            to help you master the game.
          </p>
      
          <div className="text-white text-left mb-6 space-y-2">
            <p className="font-semibold">👉 Learn how to move, attack, and interact with the world.</p>
            <p className="font-semibold">💎 Discover special abilities and power-ups.</p>
            <p className="font-semibold">⭐ Get tips on surviving and winning!</p>
          </div>
      
          <Tutorial tutData={tutData} redirect="/quiz/game" />
      
          <p className="text-white text-lg mt-4">{name}</p>
      
          {/* <Link href={"/fake-detector/game"}>
            <button className="">
               Tutorial Complete
            </button>
          </Link> */}
        </div>
      );
      
}

export default Tutorial2;