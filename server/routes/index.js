const router = require('express').Router();

router.get('/', (req, res) => {
  try {
    return res.status(200).json('work');
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
