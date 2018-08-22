import React from 'react';
import {shallow} from 'enzyme';
import LandingPage from '../js/pages/LandingPage/LandingPage';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});


describe("LandingPage Component", ()=> {
  let component = shallow (<LandingPage />);
  let intro = component.find("intro");
  let tagLine = component.find("tagLine");
  let socialIcons = component.find("social-icons");
  let gitHubUrl = component.find("githubUrl");

  it("Should be a 'div' element", () => {
    expect(component.type()).toEqual('div');
  });
});
