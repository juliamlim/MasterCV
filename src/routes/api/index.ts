import express from 'express';
import createRouter from './generic';

const router = express.Router();

router.use('/', createRouter('users', { summary: true }));
router.use('/summary', createRouter('summaries'));
router.use('/roles', createRouter('roles', { description: true }));
router.use('/descriptions', createRouter('descriptions'));
router.use('/education', createRouter('educations'));
router.use('/categories', createRouter('categories'));
router.use('/skills', createRouter('skills', { category: true }));
router.use('/volunteer', createRouter('volunteers'));
router.use('/hobbies', createRouter('hobbies'));

export default router;

