import React, {ReactNode} from 'react';
import {Card} from 'primereact/card';

interface PrimeCardProps {
  children: ReactNode;
  title?: string;
}

const PrimeCard: React.FC<PrimeCardProps> = ({children, title}) => {
    return (
        <div className='md:pt-4'>
            <Card className='md:w-7 lg:w-8
                            pr-2 pl-2 pt-0 pb-2 md:pb-0
                            mx-auto
                            md:shadow-4'>
                <h2 className='md:hidden mt-0 text-center card-title'
                    data-testid='cardTitle'>
                    {title}
                </h2>
                {children}
            </Card>
        </div>
    )
};


export default PrimeCard;