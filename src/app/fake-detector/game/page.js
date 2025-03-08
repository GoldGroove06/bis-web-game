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
    <div>
      Fake detector game Current Score: {score}
      <FakegameCards
        data={gameData[track]}
        color={color}
        handleClick={handleClick}
        selectedValue={selectedValue}
        radioRef={radioRef}
        key={key}
      />
      {nextBtn ? track == gameData.length - 1 ? (
        <GameScore
          score={score}
          redirect={"/quiz/tutorial"}
          btnText={"Next Game"}
        />
      ) : (
        <IconButton radius="full" onClick={handleNext}>
          <ArrowRightIcon />
        </IconButton> 
      )
      : ""
    }
    </div>
  );
}

export default Game1;
