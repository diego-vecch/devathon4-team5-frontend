import { useState } from 'react'

export default function Valoration () {
  const [rating, setRating] = useState(0)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formVisible, setFormVisible] = useState(false)

  const handleRatingClick = (value) => {
    setRating(value)
    setFormVisible(true)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // Aquí puedes agregar la lógica para enviar los datos del formulario
    setFormSubmitted(true)
  }

  return (
    <div className='pt-4'>
      {!formSubmitted && (
        <div className='text-center bg-light-btn w-36 text-light-lth'>
          <button
            className='bg-blue-500 text-white rounded-sm h-8 px-4'
            onClick={() => setFormVisible(!formVisible)}
          >
            Start Rating
          </button>
        </div>
      )}

      {formVisible && !formSubmitted && (
        <form className='w-64 px-1 py-1 focus:outline-none bg-light-bg2' onSubmit={handleSubmit}>
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

          <textarea className='bg-light-lth w-60 focus:outline-none px-1' name='comments' placeholder='Write your comment' />

          <input
            type='submit'
            value={formSubmitted ? 'Thank you!' : 'Send'}
            className={`bg-light-btn text-light-lth rounded-sm h-8 w-24 p-1 ${
              formSubmitted ? 'text-light-lth cursor-not-allowed' : ''
            }`}
            disabled={formSubmitted}
          />
        </form>
      )}
      {formSubmitted && (
        <p className='text-light-green mt-2 h-20 lg:h-10 border-r-light-green border-l-2 bg-light-softgreen bg-opacity-[58%] pl-2'>Thank you for evaluating your experience.</p>
      )}
    </div>
  )
}
