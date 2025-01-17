import React from 'react';
import myring1 from '../myring1.png';
import myring2 from '../myring2.png';
import fac1 from '../facilities1.png';
import fac2 from '../facilities2.png';
import fac3 from '../facilities3.png';

import {
  Container,
  Grid,
  GridColumn,
  GridRow,
  Header,
  Image,
  Segment,
} from 'semantic-ui-react';
import ImageCarousel from './ImageCarousel';

export default function HomeMain() {
  const images = [myring1, myring2, fac1, fac2, fac3];

  return (
    <div class="homecontainer">
      <Container text style={{ marginTop: '7em' }}>
        <Segment inverted>
          <Header as="h1">Black Belt Boxing</Header>
        </Segment>
        {/* <Grid columns={1}>
          <GridRow>
            <GridColumn>
              <Image src={myring1} size="huge" style={{ margin: '20px' }} />
              <Image src={myring2} size="huge" style={{ margin: '20px' }} />
              <Image src={fac1} size="huge" style={{ margin: '20px' }} />
              <Image src={fac2} size="huge" style={{ margin: '20px' }} />
              <Image src={fac3} size="huge" style={{ margin: '20px' }} />
            </GridColumn>
          </GridRow>
        </Grid> */}
        <ImageCarousel images={images}></ImageCarousel>
      </Container>
    </div>
  );
}
