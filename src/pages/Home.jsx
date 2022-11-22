import React from 'react'
import UserResults from '../Components/Users/UserResults'
import UserSearch from '../Components/Users/UserSearch'

function Home() {
  return (
    <>
        <UserSearch></UserSearch>
        <UserResults></UserResults>
    </>
  )
}

export default Home