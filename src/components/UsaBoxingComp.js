import React from 'react'
import { Image, Segment, SegmentGroup } from 'semantic-ui-react'



const UsaBoxingComp = () => (
  <Segment inverted style= {{width: '100%', overflow: 'auto', textOverflow: 'ellipsis'}}>
    <SegmentGroup>
    <Segment inverted>USA Boxing</Segment>
    <SegmentGroup>
      <Segment inverted>Follow this secure link to usaboxing.com to register and learn about the benefits</Segment>
      <Segment inverted>
        <a href='https://www.usaboxing.org/membership'>https://www.usaboxing.org/memberships</a>
      </Segment>
    </SegmentGroup>
    </SegmentGroup>
  </Segment>
)

export default UsaBoxingComp