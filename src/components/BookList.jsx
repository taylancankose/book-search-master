import React from 'react'

function BookList({volumeInfo}) {
  return (
    <div className='card border-0'>
      {
        volumeInfo.readingModes.image 
        ? <img  src={volumeInfo.imageLinks.smallThumbnail} className='card-img-top img-fluid' /> 
        : <img   className='card-img-top' src='https://dictionary.cambridge.org/tr/images/thumb/book_noun_001_01679.jpg?version=5.0.230' />
      }
      <div className="card-body">
        <p className='card-text'>{volumeInfo.title}</p>
      </div>
         </div>  
  )
}

export default BookList