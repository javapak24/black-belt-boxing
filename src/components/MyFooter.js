import React from 'react'
import { Container, Grid, Header, List, Segment } from 'semantic-ui-react'

const MyFooter = () => (
  <div>
    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Useful Links' />
              <List link inverted>
                <List.Item as='a'>Contact Us</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Services' />
              <List link inverted>
                <List.Item as='a'>How To Access</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h4' inverted>
                Footer Header
              </Header>
              <p>
                Extra space
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
      </Segment>
  </div>
)

export default MyFooter
