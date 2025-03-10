"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { IconButton, Button } from "@radix-ui/themes";
import { ArrowRightIcon } from "@radix-ui/react-icons";

function Game() {
  const router = useRouter();
  const [track, setTrack] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedValue, setSelectedValue] = useState(null);
  const [nextBtn, setNextBtn] = useState(false);
  
  const gameData = [
    {
      question: "Q1: Which BIS mark is mandatory for electrical appliances in India?",
      options: ["(A) Hallmark", "(B) AGMARK", "(C) FSSAI Logo", "(D) ISI Mark"],
      correct: 3,
    },
    {
      question: "Q2: Which of the following marks certifies the purity of gold jewelry?",
      options: ["(A) Hallmark", "(B) FSSAI", "(C) ISI", "(D) ISO"],
      correct: 0,
    },
    {
      question: "Q3: What does the FSSAI logo on food packaging indicate?",
      options: [
        "(A) The food meets safety standards set by the Food Safety and Standards Authority of India.",
        "(B) The food is organic.",
        "(C) The food is free from preservatives.",
        "(D) The food is 100% natural.",
      ],
      correct: 0,
    },
    
    {
      question: "Q4: What is the maximum time limit to file a complaint in a consumer court for a defective product?",
      options: [
        "(A) 5 years from the date of purchase",
        "(B) 6 months from the date of purchase.",
        "(C) 2 years from the date of purchase.",
        "(D) No time limit.",
      ],
      correct: 2,
    },
    
    {
      question: "Q5: Which website can consumers use to verify the authenticity of ISI-marked products?",
      options: [
        "(A) Amazon or Flipkart Product Page.",
        "(B) BIS Official Website",
        "(C) Social Media Reviews.",
        "(D) Local Newspaper Advertisements",
      ],
      correct: 1,
    },
    
    {
      question: "Q6: A website is selling branded smartphones at a 70% discount with no return policy. The website looks professional but has no customer service contact details. What should you do before buying?",
      options: [
        "(A) Contact the seller via WhatsApp and ask if it’s real.",
        "(B) Ignore warnings from others and take the risk.",
        "(C) Verify the seller’s legitimacy and check for reviews on trusted platforms.",
        "(D) Quickly buy before the deal expires.",
      ],
      correct: 2,
    }
  ];

  const handleFinish = async () => {

  
    const postData = async () => {
      try {
        const name = localStorage.getItem("name");
        const score = localStorage.getItem("score"); 
  
        const res = await fetch("/api/newplayer", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, score }), 
        });
  
        await res.json(); 
  
      
        localStorage.removeItem("score");
        localStorage.removeItem("name");
      } catch (error) {
        console.error(error);
      }
    };
  
    await postData(); 
    router.push("/leaderboard");
  };

  const handleClick = (index) => {
    if (selectedValue !== null) return; // Prevent multiple selections

    setSelectedValue(index);
    if (index === gameData[track].correct) {
      setScore((prev) => prev + 5);
    } else {
      setScore((prev) => prev - 1);
    }
    setNextBtn(true);
  };

  const handleNext = () => {
    if (track < gameData.length - 1) {
      setTrack(track + 1);
      setSelectedValue(null);
      setNextBtn(false);
    }
  };

  useEffect(() => {
    const storedScore = localStorage.getItem("score");
    if (storedScore) setScore(Number(storedScore));
  }, []);

  useEffect(() => {
    localStorage.setItem("score", score);
  }, [score]);

  return (
    <div className="absolute top-[6rem] w-full !px-6 flex justify-center z-30">
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 text-green-300 p-8 rounded-lg shadow-xl max-w-4xl w-full">
        
        {/* Quiz Header */}
        <div className="text-center !mb-6">
          <h2 className="text-green-300 text-4xl font-extrabold !mb-3">🧠 The Quiz Challenge</h2>
          <p className="text-white text-lg">Test your knowledge on consumer rights, BIS standards, and product safety.</p>
        </div>

        {/* Score Display */}
        <div className="!p-4 rounded-lg border-x-4 border-green-500 shadow-md text-center !mb-6">
          <h3 className="text-green-400 text-2xl font-semibold">🎯 Score: {score}</h3>
        </div>

        {/* Question */}
        <div className="bg-green-900 text-white !p-6 rounded-lg !mb-6 shadow-md text-center text-2xl font-bold">
          {gameData[track].question}
        </div>

        {/* MCQ Grid Layout */}
        <div className="grid grid-cols-2 gap-4">
          {gameData[track].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleClick(index)}
              className={`!p-4 rounded-lg text-lg font-semibold border-2 border-white/20 transition 
                ${
                  selectedValue === null
                    ? "bg-green-800 hover:bg-green-600"
                    : index === gameData[track].correct
                    ? "bg-green-500"
                    : selectedValue === index
                    ? "bg-red-500"
                    : "bg-green-800"
                }`}
              disabled={selectedValue !== null} // Disable button after selecting an answer
            >
              {option}
            </button>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center !mt-8">
          {nextBtn &&
            (track === gameData.length - 1 ? (
              <Button
                onClick={handleFinish}
                className="bg-green-600 hover:bg-green-700 text-white !px-6 !py-2 rounded-lg font-semibold shadow-md transition"
              >
                Finish Game
              </Button>
            ) : (
              <IconButton radius="full" onClick={handleNext} className="bg-green-600 hover:bg-green-700 text-white !p-3">
                <ArrowRightIcon size={24} />
              </IconButton>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Game;
