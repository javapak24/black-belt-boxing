import React from 'react'
import MyHeader from './components/MyHeader'
import HomeMain from './components/HomeMain'
import SuperHeader from './components/SuperHeader'
import AboutBios from './components/AboutBios'

export default function About() {
  return (
    <div className="App">
    <SuperHeader/>
    <MyHeader/>
    <AboutBios/>
   </div>
  )
}