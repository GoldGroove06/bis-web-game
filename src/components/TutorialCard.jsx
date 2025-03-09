import React from 'react';
import { Card } from '@radix-ui/themes';
import Image from 'next/image';

function TutorialCard({content, imgsrc}) {
    return (
        <Card size={4}>
            <Image
            src={imgsrc}
            alt="img"
            />
            {content}
	</Card>
    );
}

export default TutorialCard;