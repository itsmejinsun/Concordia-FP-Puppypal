const router = require('express').Router();

const {
    addUser,
    addPuppy,
    getAllPuppy,
    getPuppy,
    putPuppy,
    deletePuppy,
    addProfilePic,
    addMicrochip,
    addLicense,
    addSpay,
    addInsurance,
    addVet,
    addVaccine,
    getVaccine,
    getSingleVaccine,
    updateSingleVaccine,
} = require('./handlers');

router.post('/api/user', addUser);

router.post('/api/:userId/puppy', addPuppy);
router.get('/api/:userId/puppy', getAllPuppy);
router.get('/api/:userId/puppy/:puppyId', getPuppy);
router.put('/api/:userId/puppy/:puppyId', putPuppy);
router.delete('/api/:userId/puppy/:puppyId', deletePuppy);

router.post('/api/:userId/puppy/:puppyId/profilePic', addProfilePic);
router.post('/api/:userId/puppy/:puppyId/microchip', addMicrochip);
router.post('/api/:userId/puppy/:puppyId/license', addLicense);
router.post('/api/:userId/puppy/:puppyId/spay', addSpay);
router.post('/api/:userId/puppy/:puppyId/insurance', addInsurance);
router.post('/api/:userId/puppy/:puppyId/vet', addVet);

router.post('/api/:userId/puppy/:puppyId/vaccine', addVaccine);
router.get('/api/:userId/puppy/:puppyId/vaccine', getVaccine);
router.get('/api/:userId/puppy/:puppyId/vaccine/:vaccineId', getSingleVaccine);
router.put(
    '/api/:userId/puppy/:puppyId/vaccine/:vaccineId',
    updateSingleVaccine
);

router.get('*', (req, res) => {
    res.status(404).json({
        status: 404,
        message: 'This is not what you are looking for.',
    });
});

module.exports = router;
