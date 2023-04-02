import React from 'react'

const Search = () => {
  return (
    <>
       <div className="search">
        <div className="searchForm">
            <input type="text" placeholder='Find a user...' />
        </div>
        <div className="userChat">
            <img src="https://images.pexels.com/photos/15577045/pexels-photo-15577045.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" /> 
            <div className="userChattInfo">
           <span>Maria Aslam</span>
           <p>Ok, thank you</p>
           </div>
        </div>
       </div>
    </>
  )
}

export default Search