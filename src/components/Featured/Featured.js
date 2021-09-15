import React, { useState, useEffect } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import axios from 'axios'
import { Link } from 'react-router-dom'

import { PlayArrow, InfoOutlined } from '@material-ui/icons'

const Featured = ({ type, setGenre }) => {
  const [content, setContent] = useState({})

  const getRamdomContent = async () => {
    const baseUrl = 'https://full-stack-api-netflix-app.herokuapp.com/api'
    try {
      const res = await axios.get(`${baseUrl}/movies/ramdom?type=${type}`, {
        headers: {
          token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).token,
        },
      })
      console.log(res.data[0])
      setContent(res.data[0])
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getRamdomContent()
  }, [])
  return (
    <Container>
      {type && (
        <Categories>
          <span>{type === 'movie' ? 'Movies' : 'Series'}</span>
          <select
            name='genre'
            id='genre'
            onChange={(e) => setGenre(e.target.value)}
          >
            <option>Genre</option>
            {/* <option value='adventure'>Adventure</option> */}
            <option value='action'>Action</option>
            <option value='comedy'>Comedy</option>
            <option value='crime'>Crime</option>
            {/* <option value='fantasy'>Fantasy</option>
            <option value='historical'>Historical</option> */}
            <option value='horror'>Horror</option>
            <option value='education'>Education</option>
            {/* <option value='romance'>Romance</option>
            <option value='sci-fi'>Sci-fi</option>
            <option value='thriller'>Thriller</option>
            <option value='western'>Western</option>
            <option value='animation'>Animation</option>
            <option value='drama'>Drama</option>
            <option value='documentary'>Documentary</option> */}
          </select>
        </Categories>
      )}
      <img src={content.img} alt='' />
      <div className='info'>
        <img src={content.imgTitle} alt='' />
        <p className='desc'>{content.desc}</p>
        <div className='btns'>
          <Link
            to={{ pathname: `/watch/${content._id}`, content }}
            className='btn play'
          >
            <PlayArrow />
            <span>Play</span>
          </Link>
          <button className='btn more'>
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </Container>
  )
}

const Container = styled.div`
  ${tw`
    relative
    h-[90vh]
    w-full
    mb-8
  `}

  img {
    ${tw`
        h-full
        w-full
        object-cover
    `}
  }

  .info {
    ${tw`
        absolute
        left-[5%]
        bottom-36
        w-[35%]
    `}

    .desc {
      ${tw`
        my-4
        text-white
        md:text-lg
        `}
    }

    .btns {
      ${tw`
        flex
      `}

      .btn {
        ${tw`
            py-2
            px-5
            mr-3
            text-lg
            flex
            items-center
            justify-center
            rounded-md
            transition
            duration-200
            ease-in-out
        `}
      }

      .play {
        ${tw`
            bg-white
            text-gray-900
            hover:bg-gray-200
        `}
      }

      .more {
        ${tw`
            bg-gray-500
            text-white
            hover:bg-gray-700
        `}
      }

      span {
        ${tw`
            ml-2
        `}
      }
    }
  }
`

const Categories = styled.div`
  z-index: 5;

  ${tw`
    absolute
    left-[5%]
    top-20
  `}

  span {
    ${tw`
        mr-3
        text-xl
        md:text-2xl
        font-semibold
        text-white
    `}
  }

  select {
    ${tw`
        py-1
        px-2
        text-white
        bg-gray-900
        cursor-pointer
        focus:outline-none
    `}
  }
`

export default Featured
