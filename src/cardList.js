import React from 'react'
import Card from './card'
// import {friends} from './friends'

const CardList = ({friends}) => {
  const CardComponent = friends.map((user, i) => {
  	return (
    <Card key={i} id={friends[i].id} name={friends[i].name} email={friends[i].email} />
    )
  })

  return (

    <div>

      { CardComponent }
    </div>

  )
}

export default CardList
