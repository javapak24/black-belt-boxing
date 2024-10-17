import React from 'react'
import MyHeader from './components/MyHeader'
import SuperHeader from './components/SuperHeader'
import AboutBios from './components/AboutBios'
import MyFooter from './components/MyFooter'

export default function About() {
  return (
    <div className="App">
    <SuperHeader/>
    <MyHeader/>
    <AboutBios/>
    <MyFooter/>
   </div>
  )
}