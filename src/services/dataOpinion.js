const urlOpinion = process.env.NEXT_PUBLIC_URL_RATING_CREATE

export default function dataOpinion (jwt, placeId, comment, rating) {
  return (
    fetch(urlOpinion, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`
      },
      body: JSON.stringify({
        placeId,
        comment,
        rating
      })
    }).then(res => {
      if (!res.ok) throw new Error(' Response is not ok')
      return res.json()
    }).then(res => {
      return res.data.id
    })
  )
}

const urlUpdateOpinion = process.env.NEXT_PUBLIC_URL_RATING_UPDATE

export function updateOpinion (jwt, opinionRating, placeId, comment, rating) {
  return (
    fetch(`${urlUpdateOpinion}/${opinionRating}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`
      },
      body: JSON.stringify({
        placeId,
        comment,
        rating
      })
    })
  )
}

const ulrDeleteOpinion = process.env.NEXT_PUBLIC_URL_RATING_DELETE

export function deleteOpinion (jwt, opinionRating, placeId, comment, rating) {
  return (
    fetch(`${ulrDeleteOpinion}/${opinionRating}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`
      },
      body: JSON.stringify({
        placeId,
        comment,
        rating
      })
    })
  )
}
