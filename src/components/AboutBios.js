import React from 'react'
import pic from '../blackbelt_logo.jpg'

import {
    Container,
    Grid,
    GridColumn,
    GridRow,
    Header,
    Image,
  } from 'semantic-ui-react'

export default function AboutBios() {
  return (
    <div>
      <Container text style={{ marginTop: '7em', margin: '10px' }}>
      <Header as='h1' style={{color: 'white'}}>Black Belt Boxing</Header>
      <Grid columns={2} divided>
            <GridRow columns='equal'>
                <GridColumn>
                </GridColumn> 
                <GridColumn>
                </GridColumn>
            </GridRow>
        </Grid>
      </Container>
    </div>
  )
}