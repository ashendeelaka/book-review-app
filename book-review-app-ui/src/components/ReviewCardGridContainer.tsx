import { ReviewModel } from '@/models/entities'
import { List } from 'antd'
import React from 'react'
import ReviewCard from './ReviewCard'

interface BookReviewGridProps {
    bookReviews: ReviewModel[]
}
const ReviewCardGridContainer: React.FC<BookReviewGridProps> = (props: BookReviewGridProps) => {
  return (
    <div>
        <List
        grid={{
          gutter: 16,
          column: 3,
          xl: 3,
          lg: 2,
          md: 2,
          sm: 1,
          xs: 1,
        }}
        dataSource={props.bookReviews}
        renderItem={(review) => (
          <List.Item style={{ display: "flex", justifyContent: "center",margin:"30px" }}>
            <ReviewCard
              bookReview={review}
              
            />
          </List.Item>
        )}
      />
    </div>
  )
}

export default ReviewCardGridContainer