import { useContext, useState } from 'react'
import Context from '../context/userContext'
import SelectPlaceId from '../context/placeIdContext'
import dataOpinion, { updateOpinion, deleteOpinion } from '@/services/dataOpinion'

export default function useValoration () {
  const { jwt } = useContext(Context)
  const { placeId, setPlaceId } = useContext(SelectPlaceId)

  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')

  const [opinionRating, setOpinionRating] = useState('')

  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formVisible, setFormVisible] = useState(false)
  const [viewOptions, setViewOptions] = useState(false)
  const [editOpinion, setEditOpinion] = useState(false)
  const [noSend, setNoSend] = useState(true)

  const viewFormValoration = () => {
    setFormVisible(!formVisible)
  }

  const handleRatingClick = (value) => {
    setRating(value)
    setFormVisible(true)
  }
  const textOpinion = (event) => {
    event.preventDefault()
    setComment(event.target.value)
  }

  const sendOpinion = (event) => {
    event.preventDefault()
    setFormSubmitted(true)
    dataOpinion(jwt, placeId, comment, rating)
      .then(e => {
        const idComment = e
        setOpinionRating(idComment)
      })
    setViewOptions(true)
  }

  const editValoration = () => {
    setEditOpinion(true)
    setFormSubmitted(false)
    setNoSend(false)
  }

  const updateMyOpinion = () => {
    updateOpinion(jwt, opinionRating, placeId, comment, rating)
    setFormSubmitted(true)
    setEditOpinion(false)
  }

  const deleteMyOpinion = () => {
    deleteOpinion(jwt, opinionRating, placeId, comment, rating)
    setRating(0)
    setFormSubmitted(false)
    setFormVisible(false)
    setViewOptions(false)
    setNoSend(true)
    setPlaceId('')
  }
  return {
    isSelectPlace: Boolean(placeId),
    viewFormValoration,
    handleRatingClick,
    textOpinion,
    sendOpinion,
    editValoration,
    updateMyOpinion,
    deleteMyOpinion,
    formSubmitted,
    formVisible,
    viewOptions,
    editOpinion,
    noSend,
    rating,
    comment
  }
}
