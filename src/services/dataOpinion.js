const urlOpinion = process.env.NEXT_PUBLIC_URL_RATING_CREATE

export default function dataOpinion (jwt, Id, comment, rating) {
  return (
    fetch(urlOpinion, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Beared ${jwt}`
      },
      body: JSON.stringify({
        placeId: '4',
        comment: 'bad',
        rating: '2'
      })
    })
  )
}
