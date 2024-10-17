import React from 'react'
import { ListItem, ListIcon, ListContent, List } from 'semantic-ui-react'

const HeaderContact = () => (
  <List>
    <ListItem>
      <ListIcon name='phone' />
      <ListContent>(774) 836-5924</ListContent>
    </ListItem>
    <ListItem>
      <ListIcon name='marker' />
      <ListContent>20 Baxter Road, Hyannis, MA, United States, Massachusetts</ListContent>
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
  </List>
)

export default HeaderContact