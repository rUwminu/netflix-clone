import React, { useState, useContext, useEffect } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { Link, useHistory } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthContext/AuthContext'
import { login } from '../../Context/AuthContext/ApiCall'

const Login = () => {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { user, dispatch } = useContext(AuthContext)

  const handleLogin = (e) => {
    e.preventDefault()

    login({ email, password }, dispatch)
  }

  useEffect(() => {
    if (user) {
      history.push('/')
    }
  }, [user])

  return (
    <Container>
      <div className='top'>
        <div className='wrapper'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png'
            alt=''
          />
        </div>
      </div>
      <div className='container-test'>
        <form>
          <h1>Sign In</h1>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type='email'
            placeholder='Email or phone number'
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            placeholder='Password'
          />
          <button onClick={handleLogin} className='login-btn'>
            Sign In
          </button>
          <span>
            New to Netflix? <Link to='/register'>Sign up now.</Link>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
          </small>
        </form>
      </div>
    </Container>
  )
}

const Container = styled.div`
  ${tw`
    relative
    w-screen
    h-screen
  `}
  background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%), url("https://cdn.hipwallpaper.com/i/98/21/dUyCkp.jpg");

  .wrapper {
    ${tw`
        py-[20px]
        px-[50px]
        flex
        items-center
        justify-between
    `}

    img {
      ${tw`
        h-[40px]
      `}
    }
  }

  .container-test {
    ${tw`
        w-full
        h-full
        absolute
        top-0
        left-0
        right-0
        text-white
        flex
        flex-col
        items-center
        justify-center
    `}

    form {
      ${tw`
        max-w-sm
        h-[340px]
        py-8
        px-6
        flex
        flex-col
        items-start
        justify-around
        bg-gray-900
      `}

      h1 {
        ${tw`
            mb-2
            text-lg
            md:text-xl
            lg:text-2xl
            font-semibold
        `}
      }

      input {
        ${tw`
            mb-2
            py-2
            px-3
            w-full
            text-white
            bg-gray-400
            rounded-md
            focus:outline-none
        `}

        &::placeholder {
          ${tw`
            text-white
          `}
        }
      }

      .login-btn {
        ${tw`
            my-2
            w-full
            py-[6px]
            md:text-lg
            font-semibold
            bg-red-600
            rounded-md
            hover:bg-red-500
        `}
      }

      span {
        ${tw`
            text-gray-200
        `}

        b {
          ${tw`
            text-white
          `}
        }
      }

      small {
        ${tw`
            text-gray-200
        `}

        b {
          ${tw`
            text-white
          `}
        }
      }
    }
  }
`

export default Login
