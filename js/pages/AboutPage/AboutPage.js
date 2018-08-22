import React from 'react';


class  AboutPage extends React.Component {
  render() {
    return (
      <div class="about-page">
        <div class="about-page-content">
          <h1>About</h1>
          <p>
            I am a software developer with 9+ years of experience who loves to code.
          </p>
          <p>
            Recently, i decided to start learning to code in the cloud with some latest technologies!
            I like to work hard and learn new things.
          </p>
          <p>
          This is my Serverless portfolio built using following technologies<br></br>
            - Frontend : React.js, Babel.js, npm, webpack <br></br>
            - Build & Deployment : AWS S3, AWS Code Build, AWS Code Pipeline, AWS Lambda, Python <br></br>
            - Testing: jest, Chai.js, Mocha.js<br></br>
          </p>
        </div>
      </div>
    );
  };
};
export default AboutPage;
