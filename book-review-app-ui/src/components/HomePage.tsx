"use client"
import { Button } from 'antd'
import React, { useEffect, useState } from 'react'
import ReviewSubmitForm from './ReviewSubmitForm'
import ReviewCardGridContainer from './ReviewCardGridContainer'
import { ReviewModel } from '@/models/entities'
import RestService from '@/api-service/rest-service'
import { ClipLoader } from 'react-spinners'
import { useReviewContext } from '@/context/ReviewContext'

const HomePage = () => {
  const [isLoading, setIsLoading] = useState<boolean>()

  const reviewContext = useReviewContext()
  return (

    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh", marginTop: "100%", maxWidth: "1200px" }}>
      <ReviewSubmitForm />
      <ReviewCardGridContainer bookReviews={reviewContext.reviews!} />
    </div>
  )
}

export default HomePage