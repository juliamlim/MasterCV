export function prismaResponse(res, promise) {
    promise.then(result => res.status(200).json(result))
    .catch(error => res.status(500).json({ 
        message: error || 'There was an issue communicating with the database.' 
    }));
}