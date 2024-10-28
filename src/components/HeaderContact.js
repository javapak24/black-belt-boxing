import React from 'react'
import { ListItem, ListIcon, ListContent, List, Segment } from 'semantic-ui-react'

const HeaderContact = () => (
  <Segment inverted style= {{width: 'max-content', overflow: 'auto', textOverflow: 'ellipsis'}}>
  <List>
    <ListItem>
      <ListIcon name='phone' />
      <ListContent>(774) 836-5924</ListContent>
    </ListItem>
    <ListItem>
      <ListIcon name='marker' />
      <ListContent>20 Baxter Road, Hyannis, MA, <br/> United States, Massachusetts</ListContent>
    </ListItem>
    <ListItem>
      <ListIcon name='mail' />
      <ListContent>
        <a href='mailto:blackbeltboxinginc@gmail.com'>blackbeltboxinginc@gmail.com</a>
      </ListContent>
    </ListItem>
    <ListItem>
      <ListIcon name='linkify' />
      <ListContent>
        <a href='javapak24.github.io/black-belt-boxing/'>blackbeltboxing.com</a>
      </ListContent>
    </ListItem>
    <ListItem>
      <ListIcon name='facebook' />
      <ListContent>
        <a href='https://www.facebook.com/p/Black-Belt-Boxing-Inc-61565732704741/'>facebook.com</a>
      </ListContent>
    </ListItem>
  </List>
  </Segment>
)

export default HeaderContact