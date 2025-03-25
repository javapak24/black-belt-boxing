import React from 'react';
import BBB from '../blackbelt_logo.jpg';

import { Container, Image, Menu } from 'semantic-ui-react';

export default function MyHeader() {
  return (
    <div>
      <Menu inverted>
        <Container
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center', // Ensures vertical alignment
            listStyle: 'none',
            overflow: 'auto',
          }}
        >
          <Menu.Item
            as="a"
            href="#/"
            header
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center', // Centers logo and text
            }}
          >
            <Image size="mini" src={BBB} style={{ marginRight: '1.5em' }} />
            BBB
          </Menu.Item>
          {[
            'Home',
            'Secure Pay',
            'About',
            'Schedule',
            'USA Boxing',
            'Waiver',
          ].map((item, index) => (
            <Menu.Item
              key={index}
              as="a"
              href={`#/${item.toLowerCase().replace(' ', '')}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                flexGrow: 1, // Makes each item take equal space
              }}
            >
              {item}
            </Menu.Item>
          ))}
        </Container>
      </Menu>
    </div>
  );
}
