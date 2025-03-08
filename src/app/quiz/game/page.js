"use client"
import React, { useState, useEffect} from 'react';
import { useRouter } from 'next/navigation'

function Game() {
    const router = useRouter() 
    const [score, setScore] = useState(0)
    const handlefinish = () => {

        // send data to backend
        localStorage.removeItem("name");
        localStorage.removeItem("score");
        router.push('/')
        

    }

    useEffect(() => {
        const storedScore = localStorage.getItem("score");
        if (storedScore) setScore(storedScore);
      }, []);
    return (
        <div>
            Quiz game
            {score}
            <button onClick={handlefinish} >finish game</button>
        </div>
    );
}

export default Game;