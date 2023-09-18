import React from 'react'
import {BsFacebook, BsInstagram, BsTwitter} from 'react-icons/bs'
const Socialcons = () => {
  return (
    <div className='flex items-center gap-2 text-dark'>
      <BsFacebook className='text-lg' />
      <BsInstagram className='text-lg' />
      <BsTwitter className='text-lg' />
    </div>
  )
}

export default Socialcons