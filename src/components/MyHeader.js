import React from 'react'
import logo from '../logo.png'
import pic from '../blackbelt_logo.jpg'
import {
  Container,
  Grid,
  GridColumn,
  GridRow,
  Header,
  Image,
  Menu
} from 'semantic-ui-react'

export default function MyHeader() {
  return (
    <div>
      <Menu  inverted>
        
      <Container>
        <Menu.Item as='a' href ='#/' header>
        <Image size='mini' src= {logo} style={{ marginRight: '1.5em' }} />
        Javapak
        </Menu.Item>
        <Menu.Item as='a' href="#/">Home</Menu.Item>
        <Menu.Item as='a' href="#/pay">Secure Pay</Menu.Item>
        <Menu.Item as='a' href="#/contact">Contact</Menu.Item>
        <Menu.Item as='a' href="#/about">About</Menu.Item>
        <Menu.Item as='a' href="#/schedule">Schedule</Menu.Item>
        <Menu.Item as='a' href="#/usaboxing">USA Boxing</Menu.Item>
        <Menu.Item as='a' href="#/waiver">Waiver</Menu.Item>
      </Container>
    </Menu>
    </div>
  )
}