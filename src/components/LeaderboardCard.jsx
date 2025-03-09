import React from 'react';
import { Card,Box,Text, Flex } from "@radix-ui/themes";

function LeaderboardCard({name, score}) {
    return (
       
            <Card>
		<Flex gap="3" align="center" direction="row">
		
				<Text as="div" size="2" weight="bold">
					{name}
				</Text>
				
			
            <Text as="div" size="2" color="gray">
					{score}
			</Text>
		</Flex>
	</Card>
       
    );
}

export default LeaderboardCard;