import React, { useState, useEffect } from 'react';

function DropSection() {

    const [showSection, setShowSection] = useState(false);

    useEffect(() => {
        const  mouse => (){
        
            addEventListener( onmouseover)
        }
        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <div className="relative overflow-hidden h-2">
            {showAdvertisement && (
                <div className=" bg-black  absolute top-0 left-0 w-full transition-transform duration-500 ease-in-out transform translate-y-0">
                    this is drop section
                </div>
            )}
        </div>
    )
}

export default DropSection;
