import React from 'react'

const ApiCard = ({character}) => {
  return (
    <div className='card' style={{width:'18rem', marginTop:15}}>
    <img className='card-img-top' src={character.image} alt={character.name}/>
    <div className='card-body'>
        <h5 className='card-title'>{character.name}</h5>
        <p className='card-text'>{character.race}</p>
       
    </div>
</div>
  )
}

export default ApiCard