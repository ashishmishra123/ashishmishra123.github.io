import React from 'react'
import './searchbox.css'
const Searchbox = ({searchfield, searchChange}) => {
  return (
    <div className='pa2'>
      <input
        className='pa3 ba b--blue bg-light-blue'
        type='search'
        placeholder='Search friend'
        onChange={searchChange}
      />

    </div>
  )
}
export default Searchbox
