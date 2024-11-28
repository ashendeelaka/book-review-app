import RestService from '@/api-service/rest-service'
import { useReviewContext } from '@/context/ReviewContext'
import { ReviewModel } from '@/models/entities'
import { ArrowRightCircleIcon, PencilIcon } from '@heroicons/react/24/outline'
import { TrashIcon } from '@heroicons/react/24/outline'
import { Button, Card, Input, Rate, Typography } from 'antd'
import React, { useState } from 'react'

interface ReviewCardProps {
    bookReview: ReviewModel
}

const ReviewCard: React.FC<ReviewCardProps> = (props: ReviewCardProps) => {
    const reviewContext = useReviewContext()
    const [editedTitle, setEditedTitle] = useState<string>(props.bookReview.title)
    const [editedAuthor, setEditedAuthor] = useState<string>(props.bookReview.author)
    const [editedRate, seteditedRate] = useState<number>(props.bookReview.rating)
    const [editedReviewText, setReviewText] = useState<string>(props.bookReview.reviewText)
    const [isEdit, setIsEdit] = useState<boolean>()
    const restService = new RestService(process.env.NEXT_PUBLIC_REST_BASE_URL!)
    const handleDelete = async (id: string) => {
        try {
            await restService.delete(`/review/${id}`)
            reviewContext.setReviews!(prev => prev?.filter(review => review._id != id))

        }
        catch (error) {
            console.log("review delete error: ", error);
        }
    }

    const handleEdit = async (id: string) => {
        try {
            const EditedReview: ReviewModel = {
                title: editedTitle,
                author: editedAuthor,
                rating: editedRate,
                reviewText: editedReviewText
            }
            await restService.put(`/review/${id}`, EditedReview)
            setIsEdit(false)
        }
        catch (error) {
            console.log("Detele button error: ", error)
        }
    }
    return (
        <>
            <Card title={props.bookReview.title}>
                {!isEdit ? <><Typography.Paragraph>Author: {editedAuthor ?? props.bookReview.author}</Typography.Paragraph>
                    <Typography.Paragraph>{editedReviewText ?? props.bookReview.reviewText}</Typography.Paragraph>
                    <Rate disabled value={editedRate ?? props.bookReview.rating} />
                    <Typography.Paragraph>Posted: {new Date(props.bookReview?.createdAt!).toLocaleDateString()}</Typography.Paragraph></>
                    :
                    <>
                        <Input placeholder='Edit author' value={editedAuthor} onChange={(e) => setEditedAuthor(e.target.value)} />
                        <Input placeholder='Edit Review' value={editedReviewText} onChange={(e) => setReviewText(e.target.value)} />
                        <Rate value={editedRate} onChange={seteditedRate} />
                        </>
                        }
                {/* Edit Buttons */}
                <Button onClick={() => handleDelete(props.bookReview._id!)} style={{marginRight:"15px"}}>
                    <TrashIcon width={12} />
                </Button>
                {!isEdit && <Button onClick={() => setIsEdit!(true)}>
                    <PencilIcon width={12} />
                </Button>}
                {isEdit && <Button type='primary' onClick={() => handleEdit(props.bookReview._id!)}>
                    Apply
                </Button>}


            </Card>
        </>
    )
}

export default ReviewCard