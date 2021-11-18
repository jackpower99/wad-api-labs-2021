import express from 'express';
import  genre  from './genreData';

const router = express.Router(); 

router.get('/', async (req, res) => {
    const genres = await genre.find();
    res.status(200).json(genres);
});
export default router;