"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import QuizCards from "@/components/QuizCards";
import { IconButton, Button } from "@radix-ui/themes";
import GameScore from "@/components/GameScore";
import { ArrowRightIcon } from "@radix-ui/react-icons";

function Game() {
  const router = useRouter();
  const [color, setColor] = useState("");
  const [selectedValue, setSelectedValue] = useState(null);
  const [track, setTrack] = useState(0);
  const [key, setKey] = useState(0);
  const [score, setScore] = useState(0);
  const [nextBtn, setNextBtn] = useState(false);
  const radioRef = useRef(null);
  const gameData = [
    {
      question: "1. question ",
      option1: "o1",
      option2: "o2",
      option3: "o3",
      option4: "o4",
      correct: 4,
    },
    {
      question: "2. question ",
      option1: "o1",
      option2: "o2",
      option3: "o3",
      option4: "o4",
      correct: 4,
    },
    {
      question: "3. question ",
      option1: "o1",
      option2: "o2",
      option3: "o3",
      option4: "o4",
      correct: 4,
    },
    {
      question: "4. question ",
      option1: "o1",
      option2: "o2",
      option3: "o3",
      option4: "o4",
      correct: 4,
    },
  ];

  const handlefinish = () => {
    // send data to backend
    localStorage.removeItem("name");
    localStorage.removeItem("score");
    router.push("/leaderboard");
  };

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

  useEffect(() => {
    const storedScore = localStorage.getItem("score");
    if (storedScore) setScore(storedScore);
  }, []);

  useEffect(() => {
    localStorage.setItem("score", score);
  }, [score]);
  return (
    <div className="z-30 absolute bg-white/10 backdrop-blur-lg border-b border-white/10 text-green-300 !p-6 rounded-lg shadow-lg w-[64rem]">
      
      {/* Quiz Introduction */}
      <div className="text-center !mb-6">
        <h2 className="text-green-300 text-4xl font-extrabold mb-4">🧠 The Quiz Challenge</h2>
        <p className="text-white text-lg leading-relaxed">
          Welcome to the ultimate test of knowledge! Answer **multiple-choice questions (MCQs)** to assess your understanding of **consumer rights, BIS standards, and product safety.**  
        </p>
        <p className="text-white text-lg mt-2 leading-relaxed">
          Every correct answer gets you closer to victory—think wisely!  
        </p>
      
  
      {/* Score Display */}
      <div className=" p-4 rounded-lg border-l-4 border-green-500 shadow-md text-center mb-4">
        <h3 className="text-green-400 text-2xl font-semibold">🎯 Current Score: {score}</h3>
      </div>
      </div>
  
      {/* Quiz Cards */}
      <QuizCards
        data={gameData[track]}
        color={color}
        handleClick={handleClick}
        selectedValue={selectedValue}
        radioRef={radioRef}
        key={key}
      />
  
      {/* Navigation Buttons */}
      <div className="flex justify-center mt-6">
        {nextBtn &&
          (track === gameData.length - 1 ? (
            <Button 
              onClick={handlefinish} 
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold shadow-md transition">
              Finish Game
            </Button>
          ) : (
            <IconButton radius="full" onClick={handleNext} className="bg-green-600 hover:bg-green-700 text-white p-3">
              <ArrowRightIcon size={24} />
            </IconButton>
          ))
        }
      </div>
    </div>
  );
  
}

export default Game;
