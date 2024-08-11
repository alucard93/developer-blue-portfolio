import React, { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

import Logo from '@/components/Other/Logo/Logo'
import Nav from '@/components/Other/Nav/Nav'

const Header = () => {
  const [header, setHeader] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`${
        header ? ' bg-white' : ' bg-white'
      } sticky top-0 z-30 transition-all 
                ${pathname === '/' && 'bg-[#fef9f5]'}`}
    >
      <div className="w-full h-8 bg-[#00054F] flex align-middle justify-center">
        <h3 className="text-center text-xl text-white">#NITÉROIÉOMEUPAÍS</h3>
      </div>
      <div className="container mx-auto">
        <div className="flex justify-center items-center xl:justify-center">
          <div className="flex items-center gap-x-6 h-10">
            <Nav
              containerStyles="flex gap-x-4 items-center"
              linkStyles="relative hover:text-primary transition-all"
              underlineStyles="absolute left-0 top-full h-[2px] 
                          bg-primary w-full"
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
