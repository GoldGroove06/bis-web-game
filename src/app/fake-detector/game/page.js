"use client";
import FakegameCards from "@/components/FakegameCards";
import React, { useState, useRef, useEffect } from "react";
import { IconButton } from "@radix-ui/themes";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import GameScore from "@/components/GameScore";
import q1o1 from "../../../../assets/fakegame/q1o1.jpg"
import q1o2 from "../../../../assets/fakegame/q1o2.jpg"
import Image from "next/image";

function Game1() {
  const [color, setColor] = useState("");
  const [selectedValue, setSelectedValue] = useState(null);
  const [track, setTrack] = useState(0);
  const [key, setKey] = useState(0);
  const [score, setScore] = useState(0);
  const [nextBtn, setNextBtn] = useState(false);
  const radioRef = useRef(null);
  const gameData = [
    {   
      desc: "Which of these pressure cookers is real?",
      option1: q1o1,
      option2: q1o2,
      correct: 1,
    },
    {   
        desc: "Which of these gold rings is real?",
        option1: q1o1,
        option2: q1o2,
        correct: 1,
    },
    {
        desc: "Which of Chocolate is real?",
        option1: q1o1,
        option2: q1o2,
        correct: 1,
    },
    {
        desc: "Which of these Phones is real?",
        option1: q1o1,
        option2: q1o2,
        correct: 1,
    },
    {
        desc: "Which of these pressure cookers is real?",
        option1: q1o1,
        option2: q1o2,
        correct: 1,
    },
  ];

  useEffect(() => {
    localStorage.setItem("score", score);
  }, [score])

  const handleClick = (e) => {
    const value = e.target.value;
    setSelectedValue(value);

    if (value == gameData[track].correct) {
      setColor("green");
      const curScore = score;
      setScore(curScore + 5);
    }
    if (value != gameData[track].correct) {
      setColor("red");
      const curScore = score;
      setScore(curScore - 3);
    }

    setNextBtn(true);
  };

  const handleNext = () => {
    if (track !== gameData.length - 1) {
      setTrack(track + 1);
      setColor("");
      
      setSelectedValue(null);
      const curKey = key;
      setKey(curKey + 1);
      setNextBtn(false);
    }
  };
  console.log(track, gameData.length - 1);
  return (
    <div className="absolute !mt-6 z-30 w-[64rem] bg-white/10 backdrop-blur-lg border-b border-white/10 !px-6 !pt-6 !pb-2 text-green-300 text-xl font-semibold rounded-lg shadow-lg">
      
      {/* Game Introduction Section */}
      <div className="text-center mb-6">
        <h2 className="text-green-300 text-4xl font-extrabold mb-4">🕵️‍♂️ Time to Put Your Skills to the Test!</h2>
        <p className="text-white text-lg px-6 leading-relaxed">
          You have learned how to spot fake products—now it's time to **prove your expertise**!  
          Carefully analyze the images and **select the real product**.  
        </p>
        <p className="text-white text-lg px-6 mt-2 leading-relaxed">
          Make the right choice and earn points. But be careful—fake products can be tricky! 🛑  
        </p>
      </div>
  
      {/* Score Display */}
      <div className="bg-green-900/20 p-4 rounded-lg border-l-4 border-green-500 shadow-md text-center mb-4">
        <h3 className="text-green-400 text-2xl font-semibold">🎯 Fake Detector Game</h3>
        <p className="text-white text-xl mt-1">Current Score: {score}</p>
      </div>
  
      {/* Game Cards */}
      <FakegameCards
        data={gameData[track]}
        color={color}
        handleClick={handleClick}
        selectedValue={selectedValue}
        radioRef={radioRef}
        key={key}
      />
  
      {/* Next Button or Game Score Display */}
      
      {nextBtn &&
        (track === gameData.length - 1 ? (
          <div className="flex justify-center mt-6 ">
            <GameScore score={score} redirect={"/quiz/tutorial"} btnText={"Next Game"}  />
          </div>
        ) : (
          <div className="flex justify-center mt-6">
            <IconButton radius="full" onClick={handleNext} className="bg-green-600 hover:bg-green-700 text-white p-3">
              <ArrowRightIcon size={24} />
            </IconButton>
          </div>
        ))
      }
      </div>
    
  );
  
}

export default Game1;
