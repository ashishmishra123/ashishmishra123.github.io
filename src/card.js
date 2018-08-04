import React from 'react'

const Card = ({id, name, email}) => {
  return (

    <div className=' tc dib  bg-light-blue pa3 ma2 grow shaddow-5 bw2 br3'>
      <img alt='friends' src={`https://robohash.org/${id}?100*100`} />
      <h2>{name}</h2>
      <div>
        <p>{email}
        </p>
      </div>
    </div>

  )
}

export default Card
