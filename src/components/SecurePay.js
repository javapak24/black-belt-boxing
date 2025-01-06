import React from 'react';
import { Segment, SegmentGroup } from 'semantic-ui-react';

const SecurePay = () => (
  <Segment
    inverted
    style={{ width: '100%', overflow: 'auto', textOverflow: 'ellipsis' }}
  >
    <SegmentGroup>
      <Segment inverted>Secure Payment</Segment>
      <SegmentGroup>
        <Segment inverted>Under Construction! Coming Soon!</Segment>
      </SegmentGroup>
    </SegmentGroup>
  </Segment>
);

export default SecurePay;
