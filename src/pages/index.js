import React from "react"
import Nav from '../components/navigation'
// import PageNum from '../components/page-num'
// import  Section from '../components/section'
import Banner from '../components/banner'
// import UpperMain from '../components/upper-main'
import MidMain from '../components/mid-main'
import LowerMain from '../components/lower-main'
import Footer from '../components/footer'


// import { TweenMax, TimelineMax, gsap } from "gsap";
// import { CSSPlugin } from 'gsap/CSSPlugin'

// import {faTwitter, faInstagram, faFacebook, faGoodreads } from '@fortawesome/fontawesome-free-brands'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Helmet } from "react-helmet"


//images

const IndexPage = (props) =>{

  return(
    <>
      <Helmet title="Home | David Erickson" />
      <Nav/>
      <Banner isFront={true} />
      <br/>
      <br/>
      <br/>
      <MidMain/>
      {/* <UpperMain/> */}
      <LowerMain/>
      <Footer/>
    </>
  )
}

export default IndexPage
