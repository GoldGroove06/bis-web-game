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
            <pre>{content}</pre>
	</Card>
    );
}

export default TutorialCard;