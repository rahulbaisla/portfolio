import React from 'react';
import {shallow} from 'enzyme';
import SampleWork , {SampleWorkItemComp} from '../js/sample-work';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});

const myWork = [
  {
    'title':"Work Sample 1",
    'image': {
      'desc':"sample screenshot of a project involving code",
      'src':"images/sample1.png",
      'comment':""
    }
  },
  {
    'title':"Work Sample 2",
    'image': {
      'desc':"sample screenshot of a project involving chemistry",
      'src':"images/sample2.png",
      'comment':""
    }
  }];

describe("SampleWorkSection Component", ()=> {
  let component = shallow (<SampleWork work={myWork}/>);
  it("Should be a 'section' element", () => {
    expect(component.type()).toEqual('section');
  });

  it("Should contain as many children as there are work examples", () => {
    expect(component.find("SampleWorkItemComp").length).toEqual(myWork.length);
  });
});

// Tests for the SampleWorkItemComponent
describe("SampleWorkItemComp Component", ()=> {
  console.log(myWork[1]);
  let component = shallow (<SampleWorkItemComp myWork={myWork[1]}/>);
  let images = component.find("img");

  it("Should contain a single 'img' element", () => {
    expect(images.length).toEqual(1);
  });

  it("Should contain a single 'img' element", () => {
    expect(images.prop('src')).toEqual(myWork[1].image.src);
  });
});
