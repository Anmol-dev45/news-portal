import React from 'react'
import Container from './Container'
import Navbar from './Navbar'
import CurrentDate from './CurrentDate'
import CurrentTime from './CurrentTime'
import Translator from './Translator'
import Socialcons from './Socialcons'
import Logo from './Logo'

const Header = () => {
  return (
    <header className='py-2 md:py-8'>
      <div className='mb-1 md:mb-6'>
        <Container>
          <div className="flex justify-between items-end">
            <div className="flex gap-8 max-md:justify-between max-md:w-full items-center">
              <CurrentDate />
              <CurrentTime />
            </div>
            <div className='max-md:hidden'>
              <Logo />
            </div>
            <div className="flex gap-8 max-md:gap-3 items-center max-md:hidden">
              <Translator />
              <Socialcons />
            </div>
          </div>
        </Container>
      </div>
      <div className='max-md:flex justify-between items-center px-2'>
        <div className='md:hidden'>

          <Logo />
        </div>
        <Navbar />
      </div>
    </header>
  )
}

export default Header