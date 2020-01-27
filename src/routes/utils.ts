import { Response } from 'express';

export function prismaResponse(res: Response, promise: any) {
    promise.then((result: any) => res.status(200).json(result))
    .catch((error: any) => res.status(500).json({ 
        message: error || 'There was an issue communicating with the database.' 
    }));
}