import React, { createContext, useState } from 'react';

export const PuppyContext = createContext();

const PuppyProvider = ({ children }) => {
    const [isPuppyListOpen, setIsPuppyListOpen] = useState(false);
    const [selectedPuppy, setSelectedPuppy] = useState();

    return (
        <PuppyContext.Provider
            value={{
                isPuppyListOpen,
                setIsPuppyListOpen,
                selectedPuppy,
                setSelectedPuppy,
            }}
        >
            {children}
        </PuppyContext.Provider>
    );
};

export default PuppyProvider;
