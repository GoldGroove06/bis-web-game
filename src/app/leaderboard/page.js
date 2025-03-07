import LeaderboardCard from "@/components/LeaderboardCard";
import { Heading } from "@radix-ui/themes";
import React from "react";

function Leaderboard() {
  const list = [
    {
      name: "Arsh",
      score: 10,
    },
    {
      name: "Arsh",
      score: 10,
    },
    {
      name: "Arsh",
      score: 10,
    },
    {
      name: "Arsh",
      score: 10,
    },
    {
      name: "Arsh",
      score: 10,
    },
    {
      name: "Arsh",
      score: 10,
    },
  ];

  return <div>

    <Heading>Leaderboard</Heading>

  <div>
    {list.map((item, key) => {
        return <LeaderboardCard name={item.name} score={item.score} key={key}/>
    })}
  </div>
  </div>;
}

export default Leaderboard;
