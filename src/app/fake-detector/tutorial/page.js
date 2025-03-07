"use client"

import React from 'react';
import Link from "next/link";
import { useState, useEffect } from "react";


function Tutorial1() {
    const [name, setName] = useState(undefined);

    useEffect(() => {
        const storedName = localStorage.getItem("name");
        if (storedName) setName(storedName);
      }, []);
      
    return (
        <div>
            Tutorial of fake game 
            <div>
                {name}
            <Link href={"/fake-detector/game"}><button > Tutorial Complete </button></Link>
            </div>
        </div>
    );
}

export default Tutorial1;