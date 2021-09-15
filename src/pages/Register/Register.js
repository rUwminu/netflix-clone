import React, { useState, useRef } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'

//Icons
import { ArrowBackIos } from '@material-ui/icons'

const Register = () => {
  const history = useHistory()
  const [toRegister, setToRegister] = useState(false)
  const [slideNumber, setSlideNumber] = useState(0)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [isError, setIsError] = useState(false)

  const slideRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()

  const handleStart = (e) => {
    e.preventDefault()
    setEmail(emailRef.current.value)

    if (emailRef.current.value !== '') {
      setToRegister(true)
    }
  }

  const handleFinish = async () => {
    setIsError(false)
    const baseUrl = 'https://full-stack-api-netflix-app.herokuapp.com/api'
    try {
      if (
        email.trim() !== '' &&
        username.trim() !== '' &&
        password.trim() !== ''
      ) {
        await axios.post(`${baseUrl}auth/register`, { email, username, password })
        history.push('/login')
      } else {
        setIsError(true)
      }
    } catch (err) {
      console.log(err)
    }
  }

  const handleClick = (direction) => {
    if (direction === 'right') {
      setSlideNumber(slideNumber + 1)
      slideRef.current.style.transform = `translateX(-100%)`
    } else if (direction === 'left') {
      setSlideNumber(slideNumber - 1)
      slideRef.current.style.transform = `translateX(0%)`
    }
    console.log(slideRef.current)
  }

  const handleBack = () => {
    setIsError(false)
    if (slideNumber === 1) {
      handleClick('left')
    } else if (slideNumber === 0) {
      setToRegister(false)
    }
  }

  return (
    <Container>
      {!toRegister && <div className='bg-img' />}
      <div className={`wrapper ${toRegister && 'border-b-[1px]'}`}>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png'
          alt=''
        />
        <Link to='/login' className='login'>
          Sign In
        </Link>
      </div>

      {!toRegister ? (
        <TestContainer>
          <h1>
            Unlimited movies, TV shows,
            <br /> and more.
          </h1>
          <h2>Watch anywhere. Cancel anytime.</h2>
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>

          <div className='input'>
            <input
              ref={emailRef}
              type='email'
              placeholder='email address'
              className='email-address'
            />
            <button onClick={(e) => handleStart(e)} className='registerBtn'>
              Get Started
            </button>
          </div>
        </TestContainer>
      ) : (
        <RegisterContainer ref={slideRef}>
          <SliderLeft
            className={`${slideNumber === 0 ? 'opacity-100' : 'opacity-0'}`}
          >
            <div onClick={handleBack} className='back-btn'>
              <ArrowBackIos className='icons' /> Back
            </div>
            <h4>STEP 1 OF 2</h4>
            <h1>Finish setting up your account</h1>
            <p>
              Netflix is personalizing for you. Create a password to watch on
              any devices at anytime.
            </p>
            <div onClick={() => handleClick('right')} className='continues-btn'>
              Next
            </div>
          </SliderLeft>
          <SliderRight
            className={`${slideNumber === 1 ? 'opacity-100' : 'opacity-0'}`}
          >
            <div onClick={handleBack} className='back-btn '>
              <ArrowBackIos className='icons' /> Back
            </div>
            <h4>STEP 2 OF 2</h4>
            <h1>Create a password to start your membership</h1>
            <h2>
              Just a few more steps and you're done! <br /> We hate paperwork,
              too.{' '}
            </h2>
            <input
              type='text'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type='text'
              placeholder='Username'
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type='password'
              placeholder='password'
              onChange={(e) => setPassword(e.target.value)}
            />
            {isError && <div className='error-msg'>All Field Is Required!</div>}
            <div onClick={handleFinish} className='continues-btn'>
              Start
            </div>
          </SliderRight>
        </RegisterContainer>
      )}
    </Container>
  )
}

const Container = styled.div`
  ${tw`
    relative
    w-full
    h-screen
    overflow-hidden
  `}

  .bg-img {
    z-index: 0;
    ${tw`
      absolute
      top-0
      left-0
      w-full
      h-full
    `}
    background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%), url("https://cdn.hipwallpaper.com/i/98/21/dUyCkp.jpg");
  }

  .wrapper {
    ${tw`
        z-30
        py-[20px]
        px-[50px]
        flex
        items-center
        justify-between
        border-gray-200
    `}

    img {
      ${tw`
        z-30
        h-[25px]
        md:h-[30px]
        lg:h-[40px]
      `}
    }

    .login {
      ${tw`
        py-1
        px-4
        md:text-lg
        font-semibold
        bg-red-600
        text-white
        rounded-md
        hover:bg-red-500
        z-10
      `}
    }
  }
`

const TestContainer = styled.div`
  ${tw`
    absolute
    top-0
    w-full
    h-full
    flex
    flex-col
    items-center
    justify-center
    text-white
  `}

  h1 {
    ${tw`
        text-3xl
        md:text-4xl
        lg:text-5xl
        xl:text-6xl
        font-semibold
        text-center
      `}
  }

  h2 {
    ${tw`
        my-6
        text-xl
        md:text-2xl
        lg:text-3xl
        xl:text-4xl
      `}
  }

  p {
    ${tw`
        mb-4
        text-lg
        text-center
      `}
  }

  .input {
    ${tw`
        w-1/2
        flex
        items-center
        justify-center
        h-14
        text-lg
      `}

    input {
      ${tw`
            flex-grow
            px-4
            h-full
            text-black
            focus:outline-none
            rounded-l-md
        `}
    }

    .registerBtn {
      ${tw`
            px-6
            h-full
            bg-red-600
            font-semibold
            hover:bg-red-500
            rounded-r-md
        `}
    }
  }
`

const RegisterContainer = styled.div`
  ${tw`
    mx-auto
    mt-24
    w-full
    max-w-md
    transition
    duration-500
    ease-in-out
    flex
  `}

  .back-btn {
    ${tw`
      flex
      items-center
      justify-center
      mb-4
      w-20
      cursor-pointer
      
    `}

    .icons {
      ${tw`
        text-lg
        font-semibold
        transition
        duration-200
        ease-in-out
      `}
    }

    &:hover {
      .icons {
        ${tw`
          -translate-x-2
        `}
      }
    }
  }
`

const SliderLeft = styled.div`
  ${tw`
    flex
    flex-col
    items-start
    justify-start
    p-2
    w-full
    min-w-[28rem]
    transition
    duration-500
    ease-in-out
  `}

  h4 {
    ${tw`
      text-sm
    `}
  }

  h1 {
    ${tw`
      mb-3
      text-2xl
      md:text-3xl
      font-semibold
    `}
  }

  p {
    ${tw`
      mb-5
      text-lg
    `}
  }

  .continues-btn {
    ${tw`
      mt-1
      py-3
      w-full
      font-semibold
      text-center
      text-white
      bg-red-600
      cursor-pointer
    `}
  }
`

const SliderRight = styled.div`
  ${tw`
    flex
    flex-col
    items-start
    justify-start
    h-[300px]
    w-full
    min-w-[28rem]
    transition
    duration-500
    ease-in-out
  `}

  h4 {
    ${tw`
      text-sm
    `}
  }

  h1 {
    ${tw`
      mb-3
      text-2xl
      md:text-3xl
      font-semibold
    `}
  }

  h2 {
    ${tw`
      mb-4
      text-lg
    `}
  }

  input {
    ${tw`
      mb-3
      w-full
      py-4
      px-3
      text-lg
      border
      rounded-sm
      focus:outline-none
    `}
  }

  .error-msg{
    ${tw`
      text-red-500
    `}
  }
  
  .continues-btn {
    ${tw`
      mt-6
      py-3
      w-full
      font-semibold
      text-center
      text-white
      bg-red-600
      cursor-pointer
    `}
  }
`

export default Register
