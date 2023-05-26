import { useContext, useState } from 'react'
import SelectPlaceId from '../context/placeIdContext'

export default function useValoration () {
  const { placeId } = useContext(SelectPlaceId)
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formVisible, setFormVisible] = useState(false)
  const [opinionRating, setOpinionRating] = useState('')

  return {
    isSelectPlace: Boolean(placeId),
    rating: [rating, setRating],
    comment: [comment, setComment],
    formSubmitted: [formSubmitted, setFormSubmitted],
    formVisible: [formVisible, setFormVisible],
    opinionRating: [opinionRating, setOpinionRating]
  }
}
