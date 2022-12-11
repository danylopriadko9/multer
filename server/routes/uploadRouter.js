const uploadRouter = require('express').Router();
const fileMiddleware = require('../middleware/file');

uploadRouter.post('/', fileMiddleware.single('avatar'), (req, res) => {
  try {
    if (req.file) {
      console.log(req.file.path);
      res.json(req.file);
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = uploadRouter;
