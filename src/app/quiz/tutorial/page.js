"use client"

import React from 'react';
import Link from "next/link";
import { useState, useEffect } from "react";


function Tutorial() {
    const [name, setName] = useState(undefined);

    useEffect(() => {
        const storedName = localStorage.getItem("name");
        if (storedName) setName(storedName);
      }, []);
      
    return (
        <div>
            Tutorial of Quiz game 
            <div>
                {name}
            <Link href={"/fake-detector/game"}><button > Tutorial Complete </button></Link>
            </div>
        </div>
    );
}

export default Tutorial;