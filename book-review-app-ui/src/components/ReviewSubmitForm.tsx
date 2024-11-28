import RestService from '@/api-service/rest-service';
import { useReviewContext } from '@/context/ReviewContext';
import { ReviewModel } from '@/models/entities';
import { Button, Card, Input, message, Rate, Typography } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import React, { useEffect, useState } from 'react'

const ReviewSubmitForm = () => {
  const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
  const [isLoading, setIsLoading] = useState<boolean>()
  const [ratingCount, setRatingCount] = useState<number>()
  const [author, setAuthor] = useState<string>()
  const [title, setTitle] = useState<string>()
  const [reviewText, setReviewText] = useState<string>()
  const [messageApi, contextHolder] = message.useMessage();
  const reviewContext = useReviewContext();

  const onSubmitReview = async () => {
    try {
      setIsLoading(true)
      const restService = new RestService(process.env.NEXT_PUBLIC_REST_BASE_URL!)
      const newReview: ReviewModel = {
        title: title!,
        author: author!,
        rating: ratingCount!,
        reviewText: reviewText!
      }
      const submittedReview = await restService.post("/review/create", newReview)
      reviewContext.setReviews!([...reviewContext.reviews!, (submittedReview.data as any).data  ])
      success();
      setIsLoading(false)
    }
    catch (error) {
      console.log("review submit error")
      setIsLoading(false)
    }
  }

  const checkDisability =() =>{
    if(!title || !author || !ratingCount || !reviewText){
      return true
    }
    else return false
  }
  
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'The Review submitted successfully!',
    });
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card style={{ width: "500px", padding: '50px' }}>
        <Typography.Paragraph>Book Title*</Typography.Paragraph>
        <Input required  placeholder='Enter book title' value={title} onChange={(e) => setTitle!(e.target.value)} style={{marginBottom:"20px"}}/>
        <Typography.Paragraph>Author*</Typography.Paragraph>
        <Input placeholder='Enter author name' value={author} onChange={(e) => setAuthor!(e.target.value)} />

        <Rate style={{ display: "flex", justifyContent: "center", marginTop:"20px"}} tooltips={desc} onChange={setRatingCount} value={ratingCount} />
        <Typography.Paragraph>Review*</Typography.Paragraph>
        <TextArea autoSize={{ minRows: 3, maxRows: 3 }} placeholder='Write your own review' value={reviewText} onChange={(e) => setReviewText!(e.target.value)} />
        <Button disabled = {checkDisability()} type='primary' style={{ marginTop: "20px", width: "100%" }} onClick={onSubmitReview} loading={isLoading}>Submit Review</Button>
      </Card>
    </div>
  )
}

export default ReviewSubmitForm