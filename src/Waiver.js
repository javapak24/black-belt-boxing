import React from 'react'
import MyHeader from './components/MyHeader'
import HomeMain from './components/HomeMain'
import SuperHeader from './components/SuperHeader'
import MyFooter from './components/MyFooter'
import WaiverComp from './components/WaiverComp'

export default function Waiver() {
  return (
    <div className="App">
    <SuperHeader/>
    <MyHeader/>
    <WaiverComp/>
    <MyFooter/>
   </div>
  )
}