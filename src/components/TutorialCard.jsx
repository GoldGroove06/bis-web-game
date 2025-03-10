import React from 'react';
import { Card } from '@radix-ui/themes';
import Image from 'next/image';

function TutorialCard({content, imgsrc}) {
    return (
        <Card size={4}>
            <div className='flex flex-row '>
            <Image
            src={imgsrc}
            alt="img"
            width={200}
            height={200}
            />
            <pre className=''>{content}</pre>
            </div>
	</Card>
    );
}

export default TutorialCard;