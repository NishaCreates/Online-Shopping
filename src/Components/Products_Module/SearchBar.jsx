import React from 'react'

const SearchBar = ({onSearch}) => {

        const handleSearch=(event)=>{
            console.log('Event:', event); // Log the event object
    console.log('Value:', event.target.value);
            const searchTerm=event.target.value;
            onSearch(searchTerm)
        }  
return (
    <div className='search-bar my-3'>
        <input 
        type='text' 
        className='form-control' 
        placeholder='Search for a product...' 
        onChange={(event) => handleSearch(event)}/>
    </div>
  )
}

export default SearchBar