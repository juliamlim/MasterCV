import express from 'express';
import { PrismaClient } from '@prisma/client';
import { prismaResponse } from '../utils';
 
const router = express.Router();
const prisma = new PrismaClient();

router.post('/', (req, res) => {
    const promise = prisma.users.create({
        data: req.body,
    });
    prismaResponse(res, promise);
});

export default router;

