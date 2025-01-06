import React from 'react';
import MyHeader from './components/MyHeader';
import SuperHeader from './components/SuperHeader';
import MyFooter from './components/MyFooter';
import SecurePay from './components/SecurePay';

export default function Schedule() {
  return (
    <div className="App">
      <SuperHeader />
      <MyHeader />
      <SecurePay />
      <MyFooter />
    </div>
  );
}
