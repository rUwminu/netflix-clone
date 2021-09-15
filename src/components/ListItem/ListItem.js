import React, { useState, useEffect } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import axios from 'axios'
import { Link } from 'react-router-dom'

import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from '@material-ui/icons'

const ListItem = ({ index, item }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [movie, setMovie] = useState({})

  const getMovies = async () => {
    const baseUrl = 'https://full-stack-api-netflix-app.herokuapp.com/api'
    try {
      const res = await axios.get(`${baseUrl}/movies/find/` + item, {
        headers: {
          token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).token,
        },
      })
      setMovie(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getMovies()
  }, [item])

  return (
    <>
      {movie && (
        <Link to={{ pathname: `/watch/${movie._id}`, movie }}>
          <ItemCard
            style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img src={movie.img} alt='' />
            {isHovered && (
              <>
                <video src={movie.trailer} autoPlay={true} loop />
                <ItemInfo>
                  <div className='icons'>
                    <PlayArrow className='icon' />
                    <Add className='icon' />
                    <ThumbUpAltOutlined className='icon' />
                    <ThumbDownOutlined className='icon' />
                  </div>
                  <div className='item-info'>
                    <span>{movie.duration}</span>
                    <span className='limit'>{movie.limit}</span>
                    <span>{movie.year}</span>
                  </div>
                  <div className='desc'>{movie.desc}</div>
                  <div className='genre'>{movie.genre}</div>
                </ItemInfo>
              </>
            )}
          </ItemCard>
        </Link>
      )}
    </>
  )
}

const ItemCard = styled.div`
  ${tw`
    mr-[5px]
    w-[225px]
    h-[120px]
    bg-gray-900
    text-white
    overflow-hidden
  `}

  img {
    ${tw`
        w-full
        h-full
        overflow-hidden
        object-cover
    `}
  }

  video {
    ${tw`
        w-full
        h-[140px]
        object-cover
        absolute
        top-0
        left-0
        right-0
    `}
  }

  &:hover {
    ${tw`
        w-[325px]
        h-[320px]
        absolute
        top-[-150px]
        rounded-md
    `}
    box-shadow: 0px 0px 15px 0px rgba(255,255,255, 0.07);

    img {
      ${tw`
        h-[140px]
      `}
    }
  }
`

const ItemInfo = styled.div`
  ${tw`
    flex
    flex-col
    px-4
    py-2
  `}

  .icons {
    ${tw`
        flex
        mb-1
    `}

    .icon {
      ${tw`
        p-[5px]
        mr-2
        border
        border-white
        rounded-full
        text-3xl
        cursor-pointer
        hover:bg-gray-700
      `}
    }
  }

  .item-info {
    ${tw`
        flex
        items-center
        mb-1
        text-gray-400
    `}

    .limit {
      ${tw`
        mx-3
        px-1
        border
        border-gray-400
      `}
    }
  }

  .desc {
    ${tw`
        mb-1
    `}
  }

  .genre {
    ${tw`
        text-gray-400
    `}
  }
`

export default ListItem
