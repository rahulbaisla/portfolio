import React from 'react';
import ReactDOM from 'react-dom';

import SampleWork from './sample-work';

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
  },
  {
    'title':"Work Sample 3",
    'image': {
      'desc':"sample screenshot of a project involving cats",
      'src':"images/sample3.png",
      'comment':""
    }
  }
]
ReactDOM.render(<SampleWork work={myWork}/>, document.getElementById('sample-work'));
