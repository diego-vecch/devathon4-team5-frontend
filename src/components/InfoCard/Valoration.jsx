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
    <div>
      {!formSubmitted && (
        <div className='text-center'>
          <button
            className='bg-blue-500 text-white rounded-sm h-8 px-4'
            onClick={() => setFormVisible(true)}
          >
            Start Rating
          </button>
        </div>
      )}

      {formVisible && !formSubmitted && (
        <form className='w-64 px-1 py-1 focus:outline-none bg-light-lth' onSubmit={handleSubmit}>
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

          <textarea name='comments' cols='30' rows='10' placeholder='Write your comment' />

          <input
            type='submit'
            value={formSubmitted ? 'Thank you!' : 'Send'}
            className={`bg-blue-500 text-white rounded-sm h-8 w-24 p-1 ${
              formSubmitted ? 'bg-green-500 cursor-not-allowed' : ''
            }`}
            disabled={formSubmitted}
          />

          {formSubmitted && (
            <p className='text-green-500 mt-2'>Thank you for evaluating your experience.</p>
          )}
        </form>
      )}
    </div>
  )
}
