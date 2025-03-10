import React from 'react';
import { Card,Box,Text, Flex } from "@radix-ui/themes";

function LeaderboardCard({name, score}) {
	return (
		<Card className="bg-green-500 text-white flex justify-between items-center p-4 rounded-xl shadow-lg border-2 border-green-700 gap-4" >
		  <Flex gap="4" align="center" className="w-full !m-4">
			{/* Profile Icon or Medal for Ranking */}
			<div className="bg-green-700 text-white p-2 rounded-full flex items-center justify-center w-10 h-10 text-lg font-bold">
			  🏆
			</div>
	  
			{/* Player Name & Score */}
			<div className="flex-1">
			  <Text as="div" size="3" weight="bold" className="text-green-700">
				{name}
			  </Text>
			</div>
	  
			{/* Score Badge */}
			<div className=" text-green-700 px-4 py-1 text-lg font-semibold ">
			  {score} pts
			</div>
		  </Flex>
		</Card>
	  );
	  
}

export default LeaderboardCard;