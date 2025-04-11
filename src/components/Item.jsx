import React from 'react'

const Item = ({prod}) => {
    const {name, price, img}= prod
  return (
    <div className='card' style={{width:'18rem', marginTop:15}}>
        <img className='card-img-top' src={img} alt={name}/>
        <div className='card-body'>
            <h5 className='card-title'>{name}</h5>
            <p className='card-text'>${price},00</p>
            <a className='btn btn-dark'>Ver más</a>
        </div>
    </div>
  )
}

export default Item