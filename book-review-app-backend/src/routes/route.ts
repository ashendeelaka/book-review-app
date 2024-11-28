import express, { Request, Response } from  'express';
import { createReview, deleteReview, getReviewById, getReviews, updateReview } from '../controllers/ReviewController';
import { ReviewModel } from '../db/ReviewModel';




const router = express.Router();

router.get('/reviews',getReviews);
router.get('/review/:id', getReviewById);
router.post('/review/create', createReview);
router.put('/review/:id', updateReview);
router.delete('/review/:id', deleteReview);

export default router;