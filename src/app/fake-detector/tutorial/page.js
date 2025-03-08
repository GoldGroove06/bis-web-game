"use client";

import React from "react";
import { useState, useEffect } from "react";
import tut from "../../../../assets/tut.jpg";
import { Button } from "@radix-ui/themes";
import Tutorial from "@/components/Tutorial";

function Tutorial1() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState(undefined);

  const tutData = [
    {
      desc: "1️. BIS Certification Marks (ISI, Hallmark, FSSAI, etc.)",
      content: "✅ Real: Has an authentic ISI, Hallmark, or FSSAI logo with proper details ❌ Fake No certification mark OR a poorly printed / fake logo",
      img: tut,

    },
    { 
      desc: "2. Product Labels & Packaging Details",
      content: "✅ Real:• Proper branding, correct spelling, and consistent fonts.• A barcode/QR code that links to official product info.❌ Fake:• Spelling mistakes (e.g., \"Adibas\" instead of \"Adidas\").\n• Poor-quality printing or wrong colors.\n• No barcode or a fake QR code.",
      img: tut,
    },
    {
      desc: "3. Price & Seller Details",
      content: "✅ Real:• Sold by authorized dealers.• Price is consistent with the brand's official rates.❌ Fake:• Too cheap compared to the actual market price.\n• No valid invoice or seller details.",
      img: tut,
    },
    {
      "desc": "4. Build Quality & Material Differences",
  "content": "✅ Real:• Uses high-quality material.• Proper weight, texture, and durability.❌ Fake:• Cheap plastic instead of metal, improper stitching, weak construction.• Feels too lightweight or poorly assembled.",
      img: tut,
    },
  ];

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    if (storedName) setName(storedName);
  }, []);

  

  return (

    <div> 
        A drag-and-drop game where users compare real and fake products 

        Example: Two images of pressure cookers, one ISI-certified and one without certification. The user selects the correct one.

Before the start of this game a tutorial will be given on how to distinguish between a fake product and a real product to promote awareness.

        <Tutorial tutData={tutData} redirect="/fake-detector/game" />
    
      
    </div>
  );
}

export default Tutorial1;
