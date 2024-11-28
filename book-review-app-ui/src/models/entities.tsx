export interface ReviewModel {
    _id?: string, 
    title: string,
    author: string,
    rating: number,
    reviewText: string,
    createdAt?: Date 
}