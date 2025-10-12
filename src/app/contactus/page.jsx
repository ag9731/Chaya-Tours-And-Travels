import React from 'react'
import ContactUsBannerSection from '../components/ContactUsPageComponents/ContactUsBannerSection'
import ContactUsPageSection2 from '../components/ContactUsPageComponents/ContactUsPageSection2'
import HomePageContactUs from '../components/HomePageComponents/HomePageContactUs'

const page = () => {
  return (
    <div>
      <ContactUsBannerSection/>
      {/* <ContactUsPageSection2/> */}
      <div className='mt-20'>

      <HomePageContactUs />
      </div>
    </div>
  )
}

export default page
