import React from 'react'
import ReactPlayer from 'react-player'
import vid from './practice.mp4'
const PracticeVideo = () => {
  return (
    <div className='flex md:hidden justify-center my-10 px-5 absolute h-[50vh]'>
    <video autoPlay controls src={vid} className=''>
    </video>
    </div>
  )
}

export default PracticeVideo