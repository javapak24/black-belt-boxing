import React from 'react';
import pic from '../blackbelt_logo.jpg';

import {
  Container,
  Grid,
  GridColumn,
  GridRow,
  Header,
  Image,
  Segment,
} from 'semantic-ui-react';
import HeaderContact from './HeaderContact';
import HeaderSchedule from './HeaderSchedule';

export default function SuperHeader() {
  return (
    <div>
      <Container style={{ marginTop: '7em', margin: '10px' }}>
        <Segment inverted style={{ width: '100%' }}>
          <Header as="h1" style={{ color: 'white' }}>
            Black Belt Boxing
          </Header>
        </Segment>
        <Grid columns={3} divided style={{ width: '100%' }}>
          <GridRow columns="equal">
            <GridColumn>
              <HeaderSchedule />
            </GridColumn>
            <GridColumn>
              <Image src={pic} size="medium" />
            </GridColumn>
            <GridColumn>
              <HeaderContact />
            </GridColumn>
          </GridRow>
        </Grid>
      </Container>
    </div>
  );
}
