import express from 'express';

const router = express.Router();

router.use('/new', require('./api/user'));
router.use('/:id', require('./api'));

export default router;

