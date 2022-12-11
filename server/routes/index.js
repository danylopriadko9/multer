const uploadRouter = require('./uploadRouter');

const router = require('express').Router();

router.use('/upload', uploadRouter);

module.exports = router;
