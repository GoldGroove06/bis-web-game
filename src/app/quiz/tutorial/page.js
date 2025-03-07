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
      
    return (
        <div>
            <Tutorial tutData={tutData} redirect="/quiz/game" />
                {name}
            <Link href={"/fake-detector/game"}><button > Tutorial Complete </button></Link>
           
        </div>
    );
}

export default Tutorial2;