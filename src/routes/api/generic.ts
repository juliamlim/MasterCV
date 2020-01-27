import express from 'express';
import { PrismaClient } from '@prisma/client';
import { prismaResponse } from '../utils';
 
const prisma: any = new PrismaClient();

export default function createRouter(key: string, include = {}) {
    const router = express.Router();

    router.route('/')
        .get((req, res) => {
            const promise = prisma[key].findMany({
                include
            });
            prismaResponse(res, promise);
        })
        .post((req, res) => {
            const promise = prisma[key].create({
                data: req.body
            });
            prismaResponse(res, promise);
        });
    router.route('/:id') 
        .get((req, res) => {
            const { id } = req.params;
            const promise = prisma[key].findOne({
                where: { id },
                include
            });
            prismaResponse(res, promise);
        })
        .put((req, res) => {
            const { id } = req.params;
            const promise = prisma[key].update({
                where: { id },
                data: req.body
            });
            prismaResponse(res, promise);
        })
        .delete((req, res) => {
            const { id } = req.params;
            const promise = prisma[key].delete({
                where: { id }
            });
            prismaResponse(res, promise);
        });

    return router;
}
