import React, { createContext, useState } from 'react';

export const PuppyContext = createContext();

const PuppyProvider = ({ children }) => {
    const [isPuppyListOpen, setIsPuppyListOpen] = useState(false);
    const [isPuppyChanged, setIsPuppyChanged] = useState(false);
    const [isProfilePicOpen, setIsProfilePicOpen] = useState(false);

    const [selectedPuppyInfo, setSelectedPuppyInfo] = useState();

    const fetchPuppyInfo = () => {
        fetch(
            `/api/${localStorage.getItem('id')}/puppy/${localStorage.getItem(
                'pup'
            )}`
        )
            .then((res) => res.json())
            .then((data) => setSelectedPuppyInfo(data.data));

        return;
    };

    return (
        <PuppyContext.Provider
            value={{
                isPuppyListOpen,
                setIsPuppyListOpen,
                isPuppyChanged,
                setIsPuppyChanged,
                selectedPuppyInfo,
                isProfilePicOpen,
                setIsProfilePicOpen,
                setSelectedPuppyInfo,
                fetchPuppyInfo,
            }}
        >
            {children}
        </PuppyContext.Provider>
    );
};

export default PuppyProvider;
