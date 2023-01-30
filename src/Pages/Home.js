import React from 'react'
import Banner from './Components/Banner/Banner'
import Description from './Components/Body/Description'
import Facilities from './Components/Facility/Facilities'
import Footer from './Components/Footer/Footer'
import Packages from './Components/Packages/Packages'

export default function Home() {
  return (
    <>
      <Banner />
      <Description />
      <Packages />
      <Facilities />
      <Footer />
    </>
  )
}
