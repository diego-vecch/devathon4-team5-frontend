import React from 'react'

export const HistoryComents = () => {
  return (
    <div className="w-3/4  border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700">

      <div className="flex flex-col mx-4 my-8 justify-center items-center  pb-10 ml-2">
        <div className="table w-full ...">

          <div className="table-header-group">
            <div className="table-row">
              <div className="table-cell text-center font-bold">History Comments</div>
              <div className="table-cell text-center font-bold">Place evaluate</div>
              <div className="table-cell text-center font-bold">Value</div>
            </div>
          </div>
          <div className="table-row-group text-center ml-4">
            <div className="table-row ">
              <div className="table-cell ...">lorem ipsum lorem ipsum lorem ipsum </div>
              <div className="table-cell ...">Tokyo Japon</div>
              <div className="table-cell ...">
                <div class="flex  justify-center items-center">
                  <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                </div>
              </div>
              <div className='flex flex-row gap-4'>
                <button className='font-bold'>Update</button>
                <button className='font-bold'>Delete</button>
                <button className='font-bold'>Redirect</button>
              </div>
            </div>


          </div>


          <div className="flex flex-row">

          </div>

        </div>


      </div>
    </div>
  )
}
