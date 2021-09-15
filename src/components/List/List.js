import React, { useRef, useState } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from '@material-ui/icons'

import ListItem from '../ListItem/ListItem'

const List = ({ list }) => {
  const [slideNumber, setSlideNumber] = useState(0)
  const listRef = useRef()

  const handleClick = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x - 50
    if (direction === 'left' && slideNumber > 0) {
      setSlideNumber(slideNumber - 1)
      listRef.current.style.transform = `translateX(${230 + distance}px)`
    } else if (direction === 'right' && slideNumber < 5) {
      setSlideNumber(slideNumber + 1)
      listRef.current.style.transform = `translateX(${-230 + distance}px)`
    }
  }

  return (
    <Container>
      <h1 className='list-title'>{list.title}</h1>
      <Wrapper>
        <ArrowBackIosOutlined
          onClick={() => handleClick('left')}
          className={`slider-arrow left-arrow ${
            slideNumber > 0 ? 'flex' : 'hidden'
          }`}
        />
        <WrapperContainer ref={listRef}>
          {list.content.map((item, index) => (
            <ListItem key={index} index={index} item={item} />
          ))}
        </WrapperContainer>
        <ArrowForwardIosOutlined
          onClick={() => handleClick('right')}
          className={`slider-arrow right-arrow ${
            slideNumber >= 5 ? 'hidden' : 'flex'
          }`}
        />
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  ${tw`
    w-full
    mb-5  
  `}

  .list-title {
    ${tw`
        mb-2
        ml-[5%]
        text-lg
        md:text-xl
        text-white
    `}
  }
`
const Wrapper = styled.div`
  ${tw`
    relative
  `}

  .slider-arrow {
    z-index: 2;
    ${tw`
        absolute
        top-0
        bottom-0   
        w-[50px]
        h-full
        mx-auto
        bg-gray-800
        text-white
        opacity-50
        cursor-pointer
        hover:opacity-75
        transition
        duration-200
        ease-out
    `}

    &.left-arrow {
      ${tw`
        left-0
      `}
    }

    &.right-arrow {
      ${tw`
        right-0
      `}
    }
  }
`

const WrapperContainer = styled.div`
  ${tw`
    flex
    w-max
    ml-[50px]
    translate-x-0
    transition
    duration-500
    ease-in-out
  `}
`

export default List
