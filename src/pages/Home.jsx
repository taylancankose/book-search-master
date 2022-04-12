import React from 'react'
import Search from '../components/Search'


function Home() {
  return (
    <div className="app p-5">
      <div className="overlay p-5">      
    <div className='container p-5'>
      <div className="row p-5">
      <h1 className='text-white mt-5 text-center p-5 text-search'>Search The Book You Want</h1>
        <Search/>
      </div>
      </div>  
      </div>
    </div>
  )
}

export default Home