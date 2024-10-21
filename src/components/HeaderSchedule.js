import React from 'react'
import { Segment, SegmentGroup } from 'semantic-ui-react'

const HeaderSchedule = () => (
  <Segment inverted style= {{width: '100%', overflow: 'auto', textOverflow: 'ellipsis'}}>
    <SegmentGroup>
    <Segment inverted>Schedule</Segment>
    <SegmentGroup>
      <Segment inverted>Monday-Friday: 5PM-8PM</Segment>
      <Segment inverted>Saturday: 11AM-1PM</Segment>
    </SegmentGroup>
    </SegmentGroup>
  </Segment>
)

export default HeaderSchedule