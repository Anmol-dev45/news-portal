'use client'
import { NAV_LIST } from '@/lib/constant'
import Link from 'next/link'
import Container from './Container'
import { useEffect, useState } from 'react'
import { HiMenu } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <section className={` ${isSticky ? ' transition-all duration-300 fixed md:top-0 md:left-0 md:right-0' : null}`}>
      <Container>
        <nav className={`w-2/3 ${isSticky && 'shadow-2xl'} max-md:fixed max-md:bg-dark/90   md:w-full flex items-center z-20 max-md:right-0 max-md:top-0 max-md:h-screen max-md:flex-col max-md:pt-16 ${isOpen ? 'max-md:translate-x-0' : 'max-md:translate-x-full'} transition-all duration-300 ease-in-out`}>
          {NAV_LIST.map((item, _i) => <Link href={`/${item == 'home' ? '' : item}`} key={item} className={`capitalize font-medium md:bg-dark ${_i == NAV_LIST.length - 1 ? 'border-0' : 'md:border-r-[0.7px]'}  w-full text-center max-md:hover:bg-dark hover:bg-dark/90 max-md:py-6 py-4 text-white border-white`}>{item}</Link>)}
        </nav>
        <div className='md:hidden z-40 fixed right-0 text-4xl -mt-3' onClick={() => setIsOpen(!isOpen)}>
          {
            !isOpen ? <HiMenu /> : <AiOutlineClose />

          }

        </div>
      </Container>
    </section>
  )
}


export default Navbar