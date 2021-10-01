const router = require('express').Router();

const {
    addUser,
    addPuppy,
    getAllPuppy,
    getPuppy,
    putPuppy,
    deletePuppy,
    addProfilePic,
} = require('./handlers');

router.post('/api/user', addUser);

router.post('/api/:userId/puppy', addPuppy);
router.get('/api/:userId/puppy', getAllPuppy);
router.get('/api/:userId/puppy/:puppyId', getPuppy);
router.put('/api/:userId/puppy/:puppyId', putPuppy);
router.delete('/api/:userId/puppy/:puppyId', deletePuppy);

router.post('/api/:userId/puppy/:puppyId/profilePic', addProfilePic);

router.get('*', (req, res) => {
    res.status(404).json({
        status: 404,
        message: 'This is not what you are looking for.',
    });
});

module.exports = router;
