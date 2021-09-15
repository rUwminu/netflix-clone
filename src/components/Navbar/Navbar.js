import React, { useState, useEffect, useContext } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { Link, useHistory } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthContext/AuthContext'
import { userLogout } from '../../Context/AuthContext/ApiCall'

import { ArrowDropDown, Search, Notifications } from '@material-ui/icons'

const Navbar = () => {
  let lastScroll = 0

  const history = useHistory()
  const [dropMenu, setDropMenu] = useState(false)
  const [isScrollTop, setIsScrollTop] = useState(true)
  const [isMobile, setIsMobile] = useState()
  const { user, dispatch } = useContext(AuthContext)

  const handleCheckWidth = () => {
    let windowWidth = window.innerWidth

    if (windowWidth < 768) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  const handleScroll = () => {
    const currentTop = window.scrollY

    if (currentTop <= 0) {
      setIsScrollTop(true)
    }
    if (currentTop > lastScroll) {
      setIsScrollTop(false)
    }

    lastScroll = currentTop
  }

  useEffect(() => {
    handleCheckWidth()
    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll)
  }, [])

  const handleLogout = () => {
    userLogout(dispatch)
    history.push('/register')
  }

  return (
    <Container
      className={`${
        isScrollTop
          ? 'bg-gradient-to-b from-gray-600 to-transparent'
          : 'bg-gray-900'
      }`}
    >
      <InnerContainer>
        <LeftContainer>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png'
            alt='n-logo'
          />
          <Link to='/netflix-clone' className='links'>
            Homepage
          </Link>
          <Link to='/series' className='links'>
            Series
          </Link>
          <Link to='/movies' className='links'>
            Movies
          </Link>
          <span className='links'>New and Popular</span>
          <span className='links'>My List</span>
        </LeftContainer>
        <RightContainer>
          <Search className='icon' />
          <span>KID</span>
          <Notifications className='icon' />
          <img
            src={
              user.profilePic
                ? user.profilePic
                : 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
            }
            alt=''
          />
          <div className='profile'>
            <ArrowDropDown
              className='icon'
              onClick={() => setDropMenu(!dropMenu)}
            />
            <div
              className={`options ${dropMenu ? 'flex' : 'hidden'}`}
              onMouseLeave={() => setDropMenu(false)}
            >
              <span>Settings</span>
              <span onClick={handleLogout} className='options-item'>
                Logout
              </span>
            </div>
          </div>
        </RightContainer>
      </InnerContainer>
    </Container>
  )
}

const Container = styled.div`
  ${tw`
    fixed
    top-0
    right-0
    h-16
    w-full
    text-white
    flex
    items-center
    justify-center
    transition
    duration-500
    ease-in-out
    z-10
  `}
`

const InnerContainer = styled.div`
  ${tw`
    w-[90%]
    flex
    items-center
    justify-between
  `}
`

const LeftContainer = styled.div`
  ${tw`
    flex
    items-center
    justify-center
    z-30
  `}

  img {
    ${tw`
        mr-12
        w-20
        md:w-24
        lg:w-32
    `}
  }

  .links {
    ${tw`
        mr-6
        cursor-pointer
        hover:text-gray-200
    `}
  }
`

const RightContainer = styled.div`
  ${tw`
    flex
    items-center
    justify-center
  `}

  img {
    ${tw`
        h-10
        w-10
        object-cover
        rounded-md
        cursor-pointer
    `}
  }

  .icon {
    ${tw`
        mx-4
        cursor-pointer
    `}
  }

  .profile {
    ${tw`
        relative
        flex
        items-center
        justify-center
    `}

    .options {
      ${tw`
        px-3
        py-2
        w-36
        flex
        flex-col
        absolute
        top-8
        -right-0
        shadow-md
        bg-gray-900
        rounded-md
        `}

      span {
        ${tw`
            px-3
            py-2
            rounded-md
            cursor-pointer
            transition
            duration-200
            ease-in-out
        `}
      }

      .options-item {
        ${tw`
          hover:bg-gray-600
        `}
      }
    }
  }
`

export default Navbar
