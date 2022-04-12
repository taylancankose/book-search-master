import axios from 'axios'
import {createContext, useState, useEffect} from 'react'

const BookContext = createContext()

const API_KEY = "AIzaSyDqyJKNgorYAW3kFZKx0okwhncQ8QsbsYg"
const API_URL = "https://www.googleapis.com/books/v1/volumes?q="


export const BookProvider = ({children}) => {
const [input, setInput] = useState('')
const [books, setBooks] = useState([])
const [clickedBook, setClickedBook] = useState([])

const getBooks = () => {
    axios.get(`${API_URL}${input}&key=${API_KEY}&maxResults=40`)
    .then((res) => setBooks(res.data))
}


    return <BookContext.Provider value={{input, books, setBooks, setInput, getBooks}}>
        {children}
    </BookContext.Provider>
}

export default BookContext