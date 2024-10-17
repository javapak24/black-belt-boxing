import React from 'react'
import MyHeader from './components/MyHeader'
import HomeMain from './components/HomeMain'
import SuperHeader from './components/SuperHeader'

export default function Home() {
  return (
    <div className="App">
    <SuperHeader/>
    <MyHeader/>
    <HomeMain/>
   </div>
  )
}