import React from 'react'
import Login from './index';
import { findTestWrapper } from '../../../utils/testUtils';
import { BrowserRouter as Router } from 'react-router-dom';

import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

test('Login/click button to trigger this.handleLogin()', ()=>{
  const wrapper = shallow(<Login.WrappedComponent />);
  jest.spyOn(wrapper.instance(), 'handleLogin');
  wrapper.instance().forceUpdate();
  findTestWrapper(wrapper, 'submit').simulate('click', {
    preventDefault: ()=> {}
  });
  expect(wrapper.instance().handleLogin).toHaveBeenCalled();
})

test(`Login/
      1. test this.handleLogin() with empty email and password
      2. test this.handleLogin() with invalid/valid email and password`, ()=>{
  // test 1
  const wrapper = shallow(<Login.WrappedComponent />);
  const e = {preventDefault: ()=>{}};
  wrapper.instance().handleLogin(e);
  expect(wrapper.state('invalidEmail')).toBeTruthy;
  expect(wrapper.state('invalidPassword')).toBeTruthy;
  expect(findTestWrapper(wrapper, 'invalidEmail').length).toBe(1);
  expect(findTestWrapper(wrapper, 'invalidPassword').length).toBe(1);
  // test 2
  const email = findTestWrapper(wrapper, 'email');
  const password = findTestWrapper(wrapper, 'password');
  // test email
  email.simulate('change', {
    target: {value: 'chadmodred@gmail.c'}
  })
  expect(wrapper.state('invalidEmail')).toBeTruthy;
  email.simulate('change', {
    target: {value: 'chadmodred@gmail.co'}
  })
  expect(wrapper.state('invalidEmail')).toBeFalsy;
  expect(findTestWrapper(wrapper, 'invalidEmail').length).toBe(0);
  email.simulate('change', {
    target: {value: 'chadmodred@gmail.comc'}
  })
  expect(wrapper.state('invalidEmail')).toBeTruthy;
  //test password
  password.simulate('change', {
    target: {value: 'd'}
  })
  expect(wrapper.state('invalidpassword')).toBeFalsy;
  expect(findTestWrapper(wrapper, 'invalidPassword').length).toBe(0);

})
