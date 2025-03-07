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
      content: "1. asdasdasdas",
      img: tut,
    },
    {
      content: "2. asdasdasdas",
      img: tut,
    },
    {
      content: "3. asdasdasdas",
      img: tut,
    },
    {
      content: "4. asdasdasdas",
      img: tut,
    },
  ];

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    if (storedName) setName(storedName);
  }, []);

  

  return (

    <div>
        
        <Tutorial tutData={tutData} redirect="/fake-detector/game" isOpen={isOpen} setIsOpen={open}/>
    
      
    </div>
  );
}

export default Tutorial1;
