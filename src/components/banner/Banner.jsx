import React from 'react'
import './banner.css'

function banner() {
  return (
    <div className='banner'>
       <div className="content">
        <h1 className='title' > Movie Name</h1>
        <div className="banner_button">
            <button className='button' >Play</button>
            <button className='button' >Mylist </button>
        </div>
        <h1 className='description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque quasi accusamus atque ab soluta, iusto tempore voluptatibus quis aliquam earum corrupti id culpa? Quo ratione natus nobis, officiis minima molestiae. </h1>

       </div>
       <div className="fade"></div>
    </div>
  )
}

export default banner