import React from 'react';
import {
  Container,
  Grid,
  Header,
  List,
  ListContent,
  ListIcon,
  ListItem,
  Segment,
  SegmentGroup,
} from 'semantic-ui-react';

const MyFooter = () => (
  <div>
    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={5}>
              <Header inverted as="h4" content="Contact Us" />
              <Segment
                inverted
                style={{
                  width: 'max-content',
                  overflow: 'auto',
                  textOverflow: 'ellipsis',
                }}
              >
                <List>
                  <ListItem>
                    <ListIcon name="phone" />
                    <ListContent>(774) 836-5924</ListContent>
                  </ListItem>
                  <ListItem>
                    <ListIcon name="marker" />
                    <ListContent>
                      20 Baxter Road, Hyannis, MA, <br /> United States,
                      Massachusetts
                    </ListContent>
                  </ListItem>
                  <ListItem>
                    <ListIcon name="mail" />
                    <ListContent>
                      <a href="mailto:blackbeltboxinginc@gmail.com">
                        blackbeltboxinginc@gmail.com
                      </a>
                    </ListContent>
                  </ListItem>
                  <ListItem>
                    <ListIcon name="linkify" />
                    <ListContent>
                      <a href="javapak24.github.io/black-belt-boxing/">
                        blackbeltboxing.com
                      </a>
                    </ListContent>
                  </ListItem>
                  <ListItem>
                    <ListIcon name="facebook" />
                    <ListContent>
                      <a href="https://www.facebook.com/p/Black-Belt-Boxing-Inc-61565732704741/">
                        facebook.com
                      </a>
                    </ListContent>
                  </ListItem>
                </List>
              </Segment>
            </Grid.Column>
            {/* <Grid.Column width={3}>
              <Header inverted as='h4' content='Services' />
              <List link inverted>
                <List.Item as='a'>How To Access</List.Item>
              </List>
            </Grid.Column> */}
            <Grid.Column width={7}>
              <Header as="h4" inverted>
                Schedule
              </Header>
              <SegmentGroup>
                <Segment inverted>Monday-Friday: 5PM-8PM</Segment>
                <Segment inverted>Saturday: 11AM-1PM</Segment>
              </SegmentGroup>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </div>
);

export default MyFooter;
