import React from 'react'
import MyHeader from './components/MyHeader'
import SuperHeader from './components/SuperHeader'
import MyFooter from './components/MyFooter'
import HeaderSchedule from './components/HeaderSchedule'

export default function Schedule() {
  return (
    <div className="App">
    <SuperHeader/>
    <MyHeader/>
    <HeaderSchedule/>
    <MyFooter/>
   </div>
  )
}