'use client'
import { NAV_LIST } from '@/lib/constant'
import Link from 'next/link'
import Container from './Container'

const Navbar = () => (
    <Container>
      <nav className='w-2/3 md:w-full flex justify-around items-center  bg-dark'>
        {NAV_LIST.map((item) => <Link href={`/${item == 'Home' ? '' : item}`} key={item} className='border-2 text-white border-white'>{item}</Link>)}
      </nav>
      <div></div>
    </Container>
)


export default Navbar