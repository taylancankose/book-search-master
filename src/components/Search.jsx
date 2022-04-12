import { useContext } from 'react'
import BookContext from '../context/BookContext'
import '../index.css'
import {BiSearchAlt} from 'react-icons/bi'
import {useNavigate} from 'react-router-dom'

function Search() {
    const {input, setInput, setBooks,books, getBooks} = useContext(BookContext)
    const navigate = useNavigate()
    const onSubmit = e => {
        e.preventDefault()
        setBooks(input)
        getBooks()

        if(input === '') {
            return false
        }
        setInput('')
        navigate('/search-results ')
    }

  return (
    <div className="container">
    <form onSubmit={onSubmit}>
<div className="row mt-5">
    <div className="col-md-5 mx-auto">
        <div className="input-group">
        <input placeholder='Search for a book' className='input-search shadow border-0 rounded form-control border-end-0 border' type='search' id="example-search-input" value={input} onChange={(e) => setInput(e.target.value)} />
            <span className="input-group-append">
                <button className="btn btn-outline-secondary bg-white border-0 rounded ms-n5" type="button">
                    <i className="fa fa-search" onClick={onSubmit}></i>
                </button>
            </span>
        </div>
    </div>
</div>
    </form>
    </div>

  )
}

export default Search