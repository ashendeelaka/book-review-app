'use client'
import RestService from "@/api-service/rest-service";
import { ReviewModel } from "@/models/entities";
import { createContext, SetStateAction, useContext, useEffect, useState } from "react";

export interface ReviewContextType {
    reviews?: ReviewModel[],
    setReviews?: React.Dispatch<SetStateAction<ReviewModel[] | undefined>>
}

const ReviewContext = createContext<ReviewContextType>({})

export const ReviewContextProvider: React.FC<any> = ({ children }) => {
    const [reviews, setReviews] = useState<ReviewModel[]>();

    useEffect(()=>{
        const fetchReviewsFromDd = async () => {
            try {
                const restService = new RestService
                ('http://localhost:8080/api')
              const reviews = await restService.get('/reviews');
              setReviews!(reviews.data as any)
            }
            catch (error) {
              console.error('Error fetching reviews:', error);
              
            }
          }
          fetchReviewsFromDd()
        },[]
    )
    return (
        <ReviewContext.Provider value={{
            reviews,
            setReviews
        }}>
            {children}
        </ReviewContext.Provider>
    )
}
export const useReviewContext = () => useContext(ReviewContext);