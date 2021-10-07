import React, { createContext, useState } from 'react';

export const PuppyContext = createContext();

const PuppyProvider = ({ children }) => {
    const [isPuppyListOpen, setIsPuppyListOpen] = useState(false);
    const [isPuppyChanged, setIsPuppyChanged] = useState(false);
    const [isProfilePicOpen, setIsProfilePicOpen] = useState(false);
    const [isDeleteClick, setIsDeleteClick] = useState(false);

    const [dogBreed, setDogBreed] = useState([]);

    const [selectedPuppyInfo, setSelectedPuppyInfo] = useState();

    const handleGetGogBreed = () => {
        fetch('https://dog.ceo/api/breeds/list/all')
            .then((res) => res.json())
            .then((data) => Object.entries(data.message))
            .then((data) =>
                data
                    .map((item) =>
                        item[1].length > 0
                            ? item[1].map((arr) => `${item[0]} ${arr}`)
                            : item[0]
                    )
                    .flat()
            )
            .then((data) => setDogBreed(data));

        return;
    };

    const handleGetPuppy = () => {
        if (!localStorage.getItem('pup')) {
            setSelectedPuppyInfo('');
            return;
        }
        fetch(
            `/api/${localStorage.getItem('id')}/puppy/${localStorage.getItem(
                'pup'
            )}`
        )
            .then((res) => res.json())
            .then((data) => setSelectedPuppyInfo(data.data));

        return;
    };

    const handleUpdatePuppy = (inputData) => {
        fetch(
            `/api/${localStorage.getItem('id')}/puppy/${localStorage.getItem(
                'pup'
            )}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(inputData),
            }
        ).then((res) => res.json());

        return;
    };

    const handleDeletePuppy = () => {
        fetch(
            `/api/${localStorage.getItem('id')}/puppy/${localStorage.getItem(
                'pup'
            )}`,
            { method: 'DELETE' }
        )
            .then((res) => res.json())
            .then((data) => {
                localStorage.setItem('pup', '');
                setIsPuppyChanged(!isPuppyChanged);
                setSelectedPuppyInfo('');
                setIsDeleteClick(false);
                setIsPuppyListOpen(true);
            });

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
                setSelectedPuppyInfo,
                isDeleteClick,
                setIsDeleteClick,
                dogBreed,
                setDogBreed,
                isProfilePicOpen,
                setIsProfilePicOpen,
                handleGetGogBreed,
                handleGetPuppy,
                handleUpdatePuppy,
                handleDeletePuppy,
            }}
        >
            {children}
        </PuppyContext.Provider>
    );
};

export default PuppyProvider;
