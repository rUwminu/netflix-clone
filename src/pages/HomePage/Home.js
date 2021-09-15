import React, { useState, useEffect } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import axios from 'axios'

import { Navbar } from '../../components/index'
import { Featured, List } from '../../components/index'

const Home = ({ type }) => {
  const [lists, setLists] = useState([])
  const [genre, setGenre] = useState(null)

  const baseUrl = 'https://full-stack-api-netflix-app.herokuapp.com/api'

  const getRamdomList = async () => {
    try {
      const res = await axios.get(
        `${baseUrl}/lists${type ? '?type=' + type : ''}${genre ? '&genre=' + genre : ''}`,
        {
          headers: {
            token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).token,
          },
        }
      )
      setLists(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getRamdomList()
  }, [type, genre])

  return (
    <SectionContainer>
      <Navbar />
      <Featured type={type} setGenre={setGenre} />
      {lists && lists.map((list, index) => <List key={index} list={list} />)}
    </SectionContainer>
  )
}

const SectionContainer = styled.section`
  ${tw`
    bg-gray-900
    overflow-hidden
  `}
`

export default Home
