import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { useLocation, Link } from 'react-router-dom'

import { ArrowBackOutlined } from '@material-ui/icons'

const Watch = () => {
  const location = useLocation()
  const movie = location.movie ? location.movie : location.content
  return (
    <SectionContainer>
      <Link to='/netflix-clone'>
        <div className='back'>
          <ArrowBackOutlined className='back-icon' />
          Home
        </div>
      </Link>
      <video
        className='video'
        autoPlay
        progress
        controls
        src={movie.video}
      ></video>
    </SectionContainer>
  )
}

const SectionContainer = styled.section`
  ${tw`
    relative
    w-screen
    h-screen
  `}

  .back {
    ${tw`
      flex
      items-center
      absolute
      top-3
      left-[15px]
      py-2
      px-4
      text-white
      bg-gray-600
      rounded-sm
      cursor-pointer
      transition
      duration-200
      ease-in-out
    `}
    z-index: 1;

    .back-icon {
      ${tw`
        transition
        duration-200
        ease-in-out
      `}
    }

    :hover {
      ${tw`
        bg-gray-500
      `}

      .back-icon {
        ${tw`
          -translate-x-2
        `}
      }
    }
  }

  .video {
    ${tw`
      w-full
      h-full
    `}
  }
`

export default Watch
