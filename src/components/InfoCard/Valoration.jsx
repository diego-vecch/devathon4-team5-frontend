import useValoration from '@/hooks/useValoration'
export default function Valoration () {
  const {
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
  } = useValoration()

  return (
    <div className='pt-4'>
      {!formSubmitted && (
        <div className='text-center bg-light-btn w-36 text-light-lth'>
          <button
            className='bg-blue-500 text-white rounded-sm h-8 px-4'
            onClick={viewFormValoration}
          >
            Start Rating
          </button>
        </div>
      )}

      {formVisible && !formSubmitted && (
        <div>
          <form
            className='w-64 px-1 py-1 focus:outline-none bg-light-bg2'
            onSubmit={sendOpinion}
          >
            <h3>Value your experience</h3>
            <div className='rating'>
              {[1, 2, 3, 4, 5].map((value) => (
                <label key={value} className='star-label' onClick={() => handleRatingClick(value)}>
                  <input
                    type='checkbox'
                    name='rating'
                    value={value}
                    checked={rating === value}
                    className='star-checkbox'
                    onChange={() => {}}
                  />
                  <span className={value <= rating ? 'star filled' : 'star'}>&#9733;</span>
                </label>
              ))}
            </div>

            <textarea
              value={comment}
              onChange={textOpinion}
              className='bg-light-lth w-60 focus:outline-none px-1'
              name='comments'
              id='opion'
              placeholder='Write your comment'
            />
            {noSend && (
              <input
                type='submit'
                value={formSubmitted ? 'Thank you!' : 'Send'}
                className={`bg-light-btn text-light-lth rounded-sm h-8 w-24 p-1 ${
              formSubmitted ? 'text-light-lth cursor-not-allowed' : ''
            }`}
                disabled={formSubmitted}
              />)}
          </form>
        </div>
      )}
      {formSubmitted && (
        <div>
          <p className='text-light-green mt-2 h-20 pt-1 pl-2 lg:h-8 border-r-light-green border-l-2 bg-light-softgreen bg-opacity-90'>
            Thank you for evaluating your experience.
          </p>
          <div className='my-2'>Your value is : {rating}</div>
          <div className='my-2'>Your opinion is : {comment}</div>
        </div>
      )}
      {viewOptions && (
        <div>
          {!editOpinion && (
            <button
              onClick={editValoration}
              className='bg-light-btn text-light-lth rounded-sm h-8 w-24 p-1'
            >Edit
            </button>)}
          {editOpinion && (
            <button
              onClick={updateMyOpinion}
              className=' bg-light-btn text-light-lth rounded-sm h-8 w-24 p-1'
            >
              update
            </button>)}
          <button
            onClick={deleteMyOpinion}
            className='ml-2 mt-4 bg-light-btn text-light-lth rounded-sm h-8 w-24 p-1'
          >
            delete
          </button>
        </div>
      )}
    </div>
  )
}
