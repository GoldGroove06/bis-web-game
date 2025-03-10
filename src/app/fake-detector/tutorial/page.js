"use client";

import React from "react";
import { useState, useEffect } from "react";
import tut from "../../../../assets/tut.jpg";
import isilogo from "../../../../assets/isilogo.jpg";
import fakelogo from "../../../../assets/fakelogo.jpg";
import fakeinvo from "../../../../assets/fakeinvo.jpg";
import quality from "../../../../assets/quality.jpg";

import { Button } from "@radix-ui/themes";
import Tutorial from "@/components/Tutorial";

function Tutorial1() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState(undefined);

  const tutData = [
    {
      desc: " 1️. BIS Certification Marks (ISI, Hallmark, FSSAI, etc.)",
      content: `✅ Real: Has an authentic ISI, Hallmark, or FSSAI logo with proper details.\n❌ Fake: No certification mark OR a poorly printed / fake logo.`,
      img: isilogo,
    },
    { 
      desc: "2. Product Labels & Packaging Details",
      content: `✅ Real:\n• Proper branding, correct spelling, and consistent fonts.\n• A barcode/QR code that links to official product info.\n\n❌ Fake:\n• Spelling mistakes (e.g., "Adibas" instead of "Adidas").\n• Poor-quality printing or wrong colors.\n• No barcode or a fake QR code.`,
      img: fakelogo,
    },
    {
      desc: "3. Price & Seller Details",
      content: `✅ Real:\n• Sold by authorized dealers.\n• Price is consistent with the brand's official rates.\n\n❌ Fake:\n• Too cheap compared to the actual market price.\n• No valid invoice or seller details.`,
      img: fakeinvo,
    },
    {
      desc: "4. Build Quality & Material Differences",
      content: `✅ Real:\n• Uses high-quality material.\n• Proper weight, texture, and durability.\n\n❌ Fake:\n• Cheap plastic instead of metal, improper stitching, weak construction.\n• Feels too lightweight or poorly assembled.`,
      img: quality,
    },
    
  ];

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    if (storedName) setName(storedName);
  }, []);

  

  return (
    <div className="!p-6 m-4 !mt-6 z-30 absolute w-[50rem] h-auto items-center bg-white/10 backdrop-blur-lg border-4 border-green-800 rounded-2xl shadow-xl">
      <h2 className="text-green-300 text-4xl font-extrabold text-center mb-6">🛍️ Spot the Fake! A Quick Guide</h2>
  
      <p className="text-white text-lg text-center px-6 mb-4 leading-relaxed">
        Before you start, let's learn how to spot the difference between <strong>real</strong> and <strong>fake</strong> products! 🕵️‍♂️  
        This will help you make smarter choices and avoid counterfeit goods.
      </p>
  
      <div className="bg-green-900/20 p-4 rounded-lg border-l-4 border-green-500 shadow-md mb-4" >
        <h3 className="text-green-400 text-xl font-semibold mb-3">🔎 How to Identify Fake Products:</h3>
        <ul className="text-white text-lg space-y-2 pl-4 ">
          <li>✅ <strong>Check for Certification Marks:</strong> Look for ISI, BIS, or FSSAI labels.</li>
          <li>🔍 <strong>Watch for Spelling Errors:</strong> Fake products often have small name changes.</li>
          <li>💰 <strong>Too Cheap? Be Cautious:</strong> If the price seems too good to be true, it probably is.</li>
          <li>📦 <strong>Inspect the Packaging:</strong> Low-quality prints and missing details are red flags.</li>
          <li>🔄 <strong>Verify Return Policies:</strong> Fake sellers usually avoid offering returns.</li>
        </ul>
      </div>
  
      <div className="bg-green-900/20 p-4 mt-6 rounded-lg border-l-4 border-green-500 shadow-md">
        <h3 className="text-green-400 text-xl font-semibold mb-3">🎮 How to Play:</h3>
        <ul className="text-white text-lg space-y-2 pl-4">
          <li>🖱️ <strong>Drag and drop</strong> the correct product into the "Real" or "Fake" category.</li>
          <li>🧐 Compare **two images** and identify the **certified** one.</li>
          <li>✅ Receive instant **feedback** and learn why your choice is correct or incorrect.</li>
          <li>🏆 Earn points and become a **fake product expert!**</li>
        </ul>
      </div>
  
      <div className="flex justify-center !m-3">
        <Tutorial tutData={tutData} redirect="/fake-detector/game" />
      </div>
    </div>
  );

}

export default Tutorial1;
