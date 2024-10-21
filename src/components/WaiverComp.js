import React from 'react'
import { Image, Segment, SegmentGroup } from 'semantic-ui-react'
import waiverback from '../waiverback.png'
import waiverfront from '../waiverfront.png'


const WaiverComp = () => (
  <Segment inverted style= {{width: '100%', overflow: 'auto', textOverflow: 'ellipsis'}}>
    <SegmentGroup>
    <Segment inverted>Waiver</Segment>
    <SegmentGroup>
      <Segment inverted>Please come to the gym with this waiver filled!!</Segment>
      <Image src = {waiverfront} size='huge' style = {{margin:'20px'}} />
      <Image src = {waiverback} size='huge' style = {{margin:'20px'}} />
    </SegmentGroup>
    </SegmentGroup>
  </Segment>
)

export default WaiverComp