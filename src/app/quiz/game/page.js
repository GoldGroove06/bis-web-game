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
    <div>
      Quiz game The Quiz Challenge is an interactive game where users answer
      multiple-choice questions (MCQs) to test their knowledge about consumer
      rights, BIS standards, and product safety. Current Score {score}
      <QuizCards
        data={gameData[track]}
        color={color}
        handleClick={handleClick}
        selectedValue={selectedValue}
        radioRef={radioRef}
        key={key}
      />
      {nextBtn ? (
        track == gameData.length - 1 ? (
          <Button onClick={handlefinish}>finish game</Button>
        ) : (
          <IconButton radius="full" onClick={handleNext}>
            <ArrowRightIcon />
          </IconButton>
        )
      ) : (
        ""
      )}
    </div>
  );
}

export default Game;
