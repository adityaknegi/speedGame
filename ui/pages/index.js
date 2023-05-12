import React from 'react'
import Header from "@/components/Common/header";
import ClickGamePage from '@/components/Games/ClickGamePage'
import Footer from '@/components/Footer/Footer';
import AboutGameBio  from '@/components/Games/AboutGame';
export default function indexPage(props) {
  return (
    <>
    <Header/>
    <ClickGamePage/>
    <AboutGameBio/>

    <Footer/>
    </>
  )
}


