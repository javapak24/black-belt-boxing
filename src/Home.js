import React from 'react'
import MyHeader from './components/MyHeader'
import HomeMain from './components/HomeMain'
import SuperHeader from './components/SuperHeader'
import MyFooter from './components/MyFooter'

export default function Home() {
  return (
    <div className="App">
    <SuperHeader/>
    <MyHeader/>
    <HomeMain/>
    <MyFooter/>
   </div>
  )
}