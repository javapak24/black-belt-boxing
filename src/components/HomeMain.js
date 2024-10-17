import React from 'react'
import mainpic from '../logo.png'

import {
    Container,
    Grid,
    GridColumn,
    GridRow,
    Header,
    Image,
  } from 'semantic-ui-react'

export default function HomeMain() {
  return (
    <div class = "homecontainer">
      <Container text style={{ marginTop: '7em' }}>
      <Header as='h1'>Black Belt Boxing</Header>
      <Grid columns={2} divided>
    <GridRow>
      <GridColumn>
      <Image src = {mainpic} size='small' circular />
        </GridColumn>
        <GridColumn>
        <p id='main_bio'>
            Black Belt Boxing
        </p>
          </GridColumn>
        </GridRow>
        </Grid>
    
      </Container>
    </div>
  )
}