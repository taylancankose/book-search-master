import React, { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

function SingleBook() {
    let {id} = useParams()
    const [clickedBook, setClickedBook] = useState('')

    const [readMore, setReadMore] = useState(false)

    useEffect(() => {
      axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`)
      .then((res) => setClickedBook(res.data))
    }, [id])

    console.log(clickedBook)

  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-4 mt-5">
        {
          clickedBook?.volumeInfo?.readingModes?.image && 
          <img src={clickedBook.volumeInfo.imageLinks.extraLarge} className='img-fluid rounded' />
        }
        </div>
        <div className="col-md-8 mt-5">
          <h2>{clickedBook?.volumeInfo?.title}</h2>
          <p>{clickedBook?.volumeInfo?.subtitle}</p>
          <p className='fst-italic'>{clickedBook?.volumeInfo?.publisher}</p>
          <h4>{clickedBook?.saleInfo?.listPrice.amount} {clickedBook?.saleInfo?.listPrice.currencyCode} </h4>
          {readMore ? 
          <p>{clickedBook?.volumeInfo?.description} 
          <a className='btn btn-primary' onClick={() => setReadMore(!readMore)}>Read Less</a>
          </p>
          :
          <p>{clickedBook?.volumeInfo?.description.slice(0, 200)} 
          <a className='btn btn-primary' onClick={() => setReadMore(!readMore)}>Read More</a>
          </p>
          }
          {clickedBook?.volumeInfo?.categories?.map((category, i) => (
            <span class="badge bg-info text-dark ms-2 mt-2 mb-2" key={i}>{category}</span>
          ))}
          <div className="row">
          <div className="col-md-6">
            <a className='btn btn-success mt-3' href={clickedBook?.volumeInfo?.infoLink} target='_blank'>
              Show in Store
            </a>
            <p className='mt-3'>{clickedBook?.volumeInfo?.publishedDate}</p>
          </div>
          <div className="col-md-6">
          <p className='d-flex text-dark fw-bold '>Authors: </p>
            {
              clickedBook?.volumeInfo?.authors?.map((author, idx) => 
              <p className='d-flex' key={idx}> {author}</p> 
              )
            }
          </div>
          </div>
        </div>
      
      </div>
    </div>
  )
}

export default SingleBook