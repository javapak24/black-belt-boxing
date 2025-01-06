import React from 'react';
import jesse from '../jesse1.jpeg';
import jhardy from '../jhardy1.png';

import {
  Container,
  Grid,
  GridColumn,
  GridRow,
  Header,
  Image,
  Segment,
} from 'semantic-ui-react';

export default function AboutBios() {
  return (
    <div>
      <Container text style={{ marginTop: '7em', margin: '10px' }}>
        <Segment inverted style={{ margin: '50px' }}>
          <Header as="h1" style={{ color: 'white' }}>
            About Us
          </Header>
        </Segment>
        <Grid columns={2} divided>
          <Segment inverted>
            <h2>Jesse Barboza</h2>
          </Segment>
          <GridRow columns="equal">
            <GridColumn>
              <Image
                size="medium"
                src={jesse}
                style={{ marginRight: '1.5em' }}
              />
            </GridColumn>
            <GridColumn>
              <Segment inverted textAlign="left">
                Jesse Barboza is a former professional heavyweight boxer with
                over 20 years of experience in the sport. Hailing from
                Massachusetts, Jesse boasts an impressive career that includes
                more than 40 amateur fights and multiple Golden Gloves
                championships before transitioning to the professional ranks. As
                a coach with over 5 years of experience, Jesse is dedicated to
                passing on his knowledge and passion for boxing to the next
                generation of athletes. His standout coaching achievements
                include guiding a young prodigy to win three Silver Gloves
                championships, showcasing his ability to develop champions both
                in and out of the ring. Whether you’re a beginner looking to
                learn the fundamentals or an experienced boxer aiming to refine
                your skills, Jesse’s expertise and commitment make him an
                invaluable mentor for any aspiring fighter.
              </Segment>
            </GridColumn>
          </GridRow>
          <Segment inverted>
            <h2>John Hardy</h2>
          </Segment>
          <GridRow columns="equal">
            <GridColumn>
              <Image
                size="medium"
                src={jhardy}
                style={{ marginRight: '1.5em' }}
              />
            </GridColumn>
            <GridColumn>
              <Segment inverted textAlign="left">
                John Hardy brings a wealth of experience and community spirit to
                our gym. A proud U.S. veteran and dedicated family man, John is
                deeply committed to giving back to the community. As the owner
                of a local moving company, he played a pivotal role in
                establishing our gym by securing the location and setting up all
                the equipment, ensuring a space where athletes can thrive. For
                over 5 years, John has demonstrated his passion for supporting
                youth programs through the “Quarterback Club,” a fundraising
                initiative for the local high school football team. Partnering
                with local businesses, he created a discount card program that
                not only benefited the community but also raised funds to cover
                team dinners, events, and cherished memorabilia like letterman
                jackets for graduating seniors. In addition to his contributions
                outside the ring, John’s experience as a judge and referee at
                amateur boxing tournaments adds a unique layer of expertise to
                our gym. His knowledge, leadership, and unwavering dedication
                make him an integral part of our coaching team, inspiring
                athletes to reach their full potential both in the ring and in
                life.
              </Segment>
            </GridColumn>
          </GridRow>
        </Grid>
      </Container>
    </div>
  );
}
