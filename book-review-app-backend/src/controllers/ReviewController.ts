import { Request, Response, Express } from "express";
import { ReviewModel } from "../db/ReviewModel";

    export const getReviews = async (req: any, res: any) => {
        try {
            const reviews = await ReviewModel.find();
            if (reviews.length === 0) {
                return res.status(404).json({ message: 'No reviews found' });
            }
            return res.status(200).json(reviews);
        }
        catch (error) {
            console.log("reviews method error: ", error);
            return res.status(500).json({ message: 'Internal server error' });
        }
    }

    export const getReviewById = async (req: any, res: any) => {
        try {
            const { id } = req.params;
            const review = await ReviewModel.findById(id);
            if (!review) {
                return res.status(404).json({ message: 'Review not found' });
            }
            return res.status(200).json(review);
        }
        catch (error) {
            console.log("review/:id method error: ", error);
            return res.status(500).json({ message: "Internal server error" });
        }
    }

    export const createReview = async (req: any, res: any) => {
        try {
            const { title, author, rating, reviewText } = req.body;

            if (!title || !author || !rating || !reviewText) {
                return res.status(400).json({ message: 'Missing required fields' });
            }
            const newReview = new ReviewModel({
                title:title,
                author: author,
                rating: rating,
                reviewText: reviewText,
                createdAt: new Date()
            });
            await newReview.save();
            return res.status(201).json({ message: "Review created successfully", data: newReview });
        }
        catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal server Error' })

        }
    }

    export const updateReview = async (req: any, res: any) => {

        try {
            const {id} = req.params;
            const updatedReview = await ReviewModel.findByIdAndUpdate(id, req.body, { new: true });

            if (!updatedReview) {
                return res.status(404).json({ message: 'Review not found' });
            }
    
            return res.status(200).json( updatedReview);
        }
        catch (error) {
            console.error("PUT/reviews/:id Error: ",error);
            return res.status(500).json({ message: 'Internal Server Error' });
        }
    }

    export const  deleteReview = async (req: any, res: any) => {
        try {
            const {id} = req.params;
            const deletedReview = await ReviewModel.findByIdAndDelete(id);

            if (!deletedReview) {
                return res.status(404).json({ message: 'Review not found' });
            }

            return res.status(200).json({ message: 'Review deleted successfully', data: deletedReview });
        }
        catch (error) {
            console.log("DELETE/reviews/:id Error: ", error);
            return res.status(500).json({ message: 'Internal Server Error' });
        }
    }


