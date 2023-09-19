import { NEWS } from '@/lib/dummy'
import React from 'react'
import NewsDescription from './NewsDescription'

const Latest = () => {
  return (
    <div className='p-4 w-full bg-dark'>
        <h3 className='text-[30px] text-white font-bold mb-5'>Title</h3>
        <div className='flex flex-col gap-4'>
            {NEWS.map(({title, description}) => (
                <div>
                    <h2 className='text-2xl text-white font-bold mb-1'>{title}</h2>
                    <NewsDescription text={description} color='white'/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Latest