import React, { createContext, useState } from 'react';

export const PuppyContext = createContext();

const PuppyProvider = ({ children }) => {
    const [isPuppyListOpen, setIsPuppyListOpen] = useState(false);
    const [selectedPuppyInfo, setSelectedPuppyInfo] = useState();

    return (
        <PuppyContext.Provider
            value={{
                isPuppyListOpen,
                setIsPuppyListOpen,
                selectedPuppyInfo,
                setSelectedPuppyInfo,
            }}
        >
            {children}
        </PuppyContext.Provider>
    );
};

export default PuppyProvider;
