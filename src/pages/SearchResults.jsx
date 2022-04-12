import React, { useContext } from 'react'
import BookResults from '../components/BookResults'
import Search from '../components/Search'
import {Link} from 'react-router-dom'
import BookContext from '../context/BookContext'

function SearchResults() {
  const {books} = useContext(BookContext)
  
  return (
    <div>
        <Search />
        {   
        books.items ?
            (
            books?.items?.map((book) => {
            const {id} = book
            return (
            <Link to={`/book/${id}`}>
              <BookResults /> 
            </Link>
            )})
            )
            :
            <p className='text-center py-5 mt-5'>Loading...</p>
        }
        
    </div>
  )
}

export default SearchResults