import React from 'react'
import jesse from '../jesse1.jpeg'
import jhardy from '../jhardy1.png'

import {
    Container,
    Grid,
    GridColumn,
    GridRow,
    Header,
    Image,
    Segment,
  } from 'semantic-ui-react'

export default function AboutBios() {
  return (
    <div>
      <Container text style={{ marginTop: '7em', margin: '10px' }}>
      <Header as='h1' style={{color: 'white'}}>About Us</Header>
      <Grid columns={2} divided>
            <h2>Jesse Barboza</h2>
            <GridRow columns='equal'>
                <GridColumn>
                <Image size='medium' src= {jesse} style={{ marginRight: '1.5em' }} />
                </GridColumn> 
                <GridColumn>
                <Segment inverted>blablablablablablablablablablablablablabla</Segment>
                </GridColumn>
            </GridRow>
            <h2>John Hardy</h2>
            <GridRow columns='equal'>
                <GridColumn>
                <Image size='medium' src= {jhardy} style={{ marginRight: '1.5em' }} />
                </GridColumn> 
                <GridColumn>
                <Segment inverted>blablablablablablablablablablablablablabla</Segment>
                </GridColumn>
            </GridRow>
        </Grid>
      </Container>
    </div>
  )
}