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
import HeaderContact from './HeaderContact'

export default function SuperHeader() {
  return (
    <div>
      <Container text style={{ marginTop: '7em', margin: '10px' }}>
      <Header as='h1' style={{color: 'white'}}>Black Belt Boxing</Header>
      <Grid columns={3} divided>
            <GridRow columns='equal'>
                <GridColumn>
                </GridColumn> 
                <GridColumn>
                <Image src = {pic} size='medium'/>
                </GridColumn>
                <GridColumn>
                <HeaderContact />
                </GridColumn>
            </GridRow>
        </Grid>
    
      </Container>
    </div>
  )
}