import React from 'react'
import { useContext } from 'react'
import BookContext from '../context/BookContext'
import BookList from './BookList'

function BookResults() {
    const {books} = useContext(BookContext)
  return (
    <div className='container '>
      <div className="row">
        {
            books?.items?.map((book) => (
              <div className="col-md-2 d-flex justify-content-center mt-5">
                <BookList key={book.id} {...book} />
              </div>

            ))
        }
        </div>
    </div>
  )
}

export default BookResults