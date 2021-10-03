import React, { useContext } from 'react';
import NewWindow from 'react-new-window';

import { PuppyContext } from '../../../PuppyContext';

const PrintProfile = ({ setIsPrintOpen }) => {
    const { selectedPuppyInfo } = useContext(PuppyContext);

    return (
        <NewWindow onUnload={() => setIsPrintOpen(false)}>
            <div
                style={{
                    height: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    position: 'relative',
                }}
            >
                <div
                    style={{
                        backgroundColor: '#f4f4f8',
                        width: '100vw',
                        padding: '6rem 0 3rem',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <img
                        src={selectedPuppyInfo.profilePic}
                        alt={selectedPuppyInfo._id}
                        className="profile-pic"
                        style={{ borderRadius: '50%', marginRight: '2rem' }}
                    />
                    <div
                        style={{
                            color: '#36282e',
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <h1 style={{ marginBottom: '0.5rem' }}>Hello</h1>
                        <h2>My name is {selectedPuppyInfo.name}</h2>
                    </div>
                </div>
                <div
                    style={{
                        padding: '5rem 2rem 0',
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <div
                        style={{
                            flex: '1',
                            padding: '2rem 2rem 0 4rem',
                            borderRight: 'solid 1px #36282e',
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <div style={{ marginBottom: '3rem' }}>
                            <h3 style={{ marginBottom: '1rem' }}>ABOUT ME</h3>
                            <p style={{ margin: '0 0 0.25rem 0.25rem' }}>
                                Birthday{' '}
                                <b>
                                    {selectedPuppyInfo.birthday &&
                                        selectedPuppyInfo.birthday}
                                </b>
                            </p>
                            <p style={{ margin: '0 0 0.25rem 0.25rem' }}>
                                Gender{' '}
                                <b>
                                    {selectedPuppyInfo.gender &&
                                        selectedPuppyInfo.gender}
                                </b>
                            </p>
                            <p style={{ margin: '0 0 0.25rem 0.25rem' }}>
                                Breed{' '}
                                <b>
                                    {selectedPuppyInfo.breed &&
                                        selectedPuppyInfo.breed}
                                </b>
                            </p>
                        </div>
                        <div style={{ marginBottom: '3rem' }}>
                            <h3 style={{ marginBottom: '1rem' }}>INSURANCE</h3>
                            <p style={{ margin: '0 0 0.25rem 0.25rem' }}>
                                Number{' '}
                                <b>
                                    {selectedPuppyInfo.insurance &&
                                        selectedPuppyInfo.insurance.number &&
                                        selectedPuppyInfo.insurance.number}
                                </b>
                            </p>
                            <p style={{ margin: '0 0 0.25rem 0.25rem' }}>
                                Company{' '}
                                <b>
                                    {selectedPuppyInfo.insurance &&
                                        selectedPuppyInfo.insurance.company &&
                                        selectedPuppyInfo.insurance.company}
                                </b>
                            </p>
                            <p style={{ margin: '0 0 0.25rem 0.25rem' }}>
                                Expire date{' '}
                                <b>
                                    {selectedPuppyInfo.insurance &&
                                        selectedPuppyInfo.insurance.endDate &&
                                        selectedPuppyInfo.insurance.endDate}
                                </b>
                            </p>
                        </div>
                        <div style={{ marginBottom: '3rem' }}>
                            <h3 style={{ marginBottom: '1rem' }}>
                                VETERINARY CLINIC
                            </h3>
                            <p style={{ margin: '0 0 0.25rem 0.25rem' }}>
                                Name{' '}
                                <b>
                                    {selectedPuppyInfo.vet &&
                                        selectedPuppyInfo.vet.name &&
                                        selectedPuppyInfo.vet.name}
                                </b>
                            </p>
                            <p style={{ margin: '0 0 0.25rem 0.25rem' }}>
                                Phone{' '}
                                <b>
                                    {selectedPuppyInfo.vet &&
                                        selectedPuppyInfo.vet.phone &&
                                        selectedPuppyInfo.vet.phone}
                                </b>
                            </p>
                            <p style={{ margin: '0 0 0.25rem 0.25rem' }}>
                                Website{' '}
                                <b>
                                    {selectedPuppyInfo.vet &&
                                        selectedPuppyInfo.vet.web &&
                                        selectedPuppyInfo.vet.web}
                                </b>
                            </p>
                        </div>
                    </div>
                    <div
                        style={{
                            flex: '1',
                            padding: '2rem 2rem 0 4rem',
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <div style={{ marginBottom: '3rem' }}>
                            <h3 style={{ marginBottom: '1rem' }}>MICROCHIP</h3>
                            <p style={{ margin: '0 0 0.25rem 0.25rem' }}>
                                Number{' '}
                                <b>
                                    {selectedPuppyInfo.microchip &&
                                        selectedPuppyInfo.microchip.number &&
                                        selectedPuppyInfo.microchip.number}
                                </b>
                            </p>
                            <p style={{ margin: '0 0 0.25rem 0.25rem' }}>
                                Registered on{' '}
                                <b>
                                    {selectedPuppyInfo.microchip &&
                                        selectedPuppyInfo.microchip.date &&
                                        selectedPuppyInfo.microchip.date}
                                </b>
                            </p>
                            <p style={{ margin: '0 0 0.25rem 0.25rem' }}>
                                Registered at{' '}
                                <b>
                                    {selectedPuppyInfo.microchip &&
                                        selectedPuppyInfo.microchip.place &&
                                        selectedPuppyInfo.microchip.place}
                                </b>
                            </p>
                        </div>
                        <div style={{ marginBottom: '3rem' }}>
                            <h3 style={{ marginBottom: '1rem' }}>
                                PET LICENSE
                            </h3>
                            <p style={{ margin: '0 0 0.25rem 0.25rem' }}>
                                Number{' '}
                                <b>
                                    {selectedPuppyInfo.license &&
                                        selectedPuppyInfo.license.number &&
                                        selectedPuppyInfo.license.number}
                                </b>
                            </p>
                            <p style={{ margin: '0 0 0.25rem 0.25rem' }}>
                                Issued date{' '}
                                <b>
                                    {selectedPuppyInfo.license &&
                                        selectedPuppyInfo.license.issueDate &&
                                        selectedPuppyInfo.license.issueDate}
                                </b>
                            </p>
                            <p style={{ margin: '0 0 0.25rem 0.25rem' }}>
                                Expire date{' '}
                                <b>
                                    {selectedPuppyInfo.license &&
                                        selectedPuppyInfo.license.expireDate &&
                                        selectedPuppyInfo.license.expireDate}
                                </b>
                            </p>
                            <p style={{ margin: '0 0 0.25rem 0.25rem' }}>
                                Issued by{' '}
                                <b>
                                    {selectedPuppyInfo.license &&
                                        selectedPuppyInfo.license.issueBy &&
                                        selectedPuppyInfo.license.issueBy}
                                </b>
                            </p>
                        </div>
                        <div style={{ marginBottom: '3rem' }}>
                            <h3 style={{ marginBottom: '1rem' }}>
                                SPAY(NEUTER)
                            </h3>
                            <p style={{ margin: '0 0 0.25rem 0.25rem' }}>
                                Date{' '}
                                <b>
                                    {selectedPuppyInfo.spay &&
                                        selectedPuppyInfo.spay.date &&
                                        selectedPuppyInfo.spay.date}
                                </b>
                            </p>
                            <p style={{ margin: '0 0 0.25rem 0.25rem' }}>
                                Clinic{' '}
                                <b>
                                    {selectedPuppyInfo.spay &&
                                        selectedPuppyInfo.spay.clinic &&
                                        selectedPuppyInfo.spay.clinic}
                                </b>
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        backgroundColor: '#f4f4f8',
                        width: '100vw',
                        padding: '2rem 0',
                        position: 'absolute',
                        bottom: '0',
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <p style={{ paddingRight: '1rem' }}>Family Contact [ </p>
                    <p style={{ paddingRight: '10rem' }}>Name:</p>
                    <p style={{ paddingRight: '10rem' }}>Contact:</p>
                    <p> ]</p>
                </div>
            </div>
        </NewWindow>
    );
};

export default PrintProfile;
