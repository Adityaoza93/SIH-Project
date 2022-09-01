import React from 'react'
import videobg from './videobg.mp4'
import './videobg.css'

export default function Videobg() {
  return (
    <div className='main' id='background-video'>
      <video src={videobg} autoPlay loop muted/>
    </div>
  )
}
