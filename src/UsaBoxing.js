import React from 'react'
import MyHeader from './components/MyHeader'
import SuperHeader from './components/SuperHeader'
import MyFooter from './components/MyFooter'
import UsaBoxingComp from './components/UsaBoxingComp'
import HomeMain from './components/HomeMain'

export default function UsaBoxing() {
  return (
    <div className="App">
    <SuperHeader/>
    <MyHeader/>
    <UsaBoxingComp/>
    <HomeMain/>
    <MyFooter/>
   </div>
  )
}