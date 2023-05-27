import React from 'react'
import Banner from './Banner'
// import Breaking from './Breaking'
import Highlight from './Highlight'
import Suscribe from './Suscribe'
import Sponser from './Sponser'
import Trend from './Trend'
import Related from './Related'
import ScrollTop from './ScrollTop'
import Trending from './Trending'

function Home() {
  return (
    <>
      <ScrollTop/>
      <Banner/>
      <Trend/>
      <Sponser/>
      {/* <Breaking/> */}
      <Highlight/>
      <Trending/>
      <Related/>
      <Suscribe/>
      
    </>
  )
}

export default Home
