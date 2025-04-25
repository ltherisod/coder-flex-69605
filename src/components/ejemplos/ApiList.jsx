import React from 'react'
import ApiCard from './ApiCard'

const ApiList = ({personajes}) => {
  return (
    <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap'}}>
        {personajes.map((character)=> <ApiCard key={character.id} character={character}/>)}
    </div>
  )
}

export default ApiList