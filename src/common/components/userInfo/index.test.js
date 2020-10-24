import React from 'react'
import SignUp from './index';
import { findTestWrapper } from '../../../utils/testUtils';
import { BrowserRouter as Router } from 'react-router-dom';

import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

test('SignUp/click button to trigger this.handleSignUp()', ()=>{
  const wrapper = shallow(<SignUp.WrappedComponent />);
  jest.spyOn(wrapper.instance(), 'handleSignUp');
  wrapper.instance().forceUpdate();
  findTestWrapper(wrapper, 'submit').simulate('click', {
    preventDefault: ()=> {}
  });
  expect(wrapper.instance().handleSignUp).toHaveBeenCalled();
})

test(`SignUp/ test this.handleSignUp() with empty email and password`, ()=>{
  // test 1
  const wrapper = shallow(<SignUp.WrappedComponent />);
  const e = {preventDefault: ()=>{}};
  wrapper.instance().handleSignUp(e);
  expect(wrapper.state('invalidEmail')).toBeTruthy;
  expect(wrapper.state('tooShortPassword')).toBeTruthy;
  expect(wrapper.state('invalidCredential')).toBeTruthy;

  expect(findTestWrapper(wrapper, 'invalidEmail').length).toBe(1);
  expect(findTestWrapper(wrapper, 'tooShortPassword').length).toBe(1);

})

test(`SignUp/ test this.handleSignUp() with invalid/valid email and password`, ()=>{
  const wrapper = mount(<SignUp.WrappedComponent />);
  const e = {preventDefault: ()=>{}};
  wrapper.instance().handleSignUp(e);
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
    target: {value: 'dddd'}
  })
  expect(wrapper.state('tooShortPassword')).toBeTruthy;
  expect(findTestWrapper(wrapper, 'tooShortPassword').length).toBe(1);

  password.simulate('change', {
    target: {value: 'ddddddd'}
  })
  expect(wrapper.state('tooShortPassword')).toBeFalsy;
  expect(findTestWrapper(wrapper, 'tooShortPassword').length).toBe(0);
  expect(findTestWrapper(wrapper, 'weakPassword').length).toBe(1);

  password.simulate('change', {
    target: {value: 'qdcghrjdfsgqaerg'}
  });
  expect(wrapper.state('passwordScore')).toBeGreaterThanOrEqual(2);
  expect(findTestWrapper(wrapper, 'weakPassword').length).toBe(0);

})

