"use client"
import React from 'react';
import { useRouter } from 'next/navigation'

function Game() {
    const router = useRouter() 

    const handlefinish = () => {

        // send data to backend
        localStorage.removeItem("name");
        localStorage.removeItem("score");
        router.push('/')
        

    }
    return (
        <div>
            Quiz game

            <button onClick={handlefinish} >finish game</button>
        </div>
    );
}

export default Game;