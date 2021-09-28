const router = require('express').Router();

const { addUser, addPuppy } = require('./handlers');

router.post('/api/user', addUser);
router.post('/api/user/:userId', addPuppy);

router.get('*', (req, res) => {
    res.status(404).json({
        status: 404,
        message: 'This is not what you are looking for.',
    });
});

module.exports = router;
