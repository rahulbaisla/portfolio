import React from 'react';


class  AboutPage extends React.Component {
  render() {
    return (
      <div class="about-page">
        <div class="about-page-content">
          <h1>About</h1>
          <p>
            I am a software developer who enjoys his work and loves to code.
          </p>
          <p>
            I like to work hard and learn new things.
          </p>
          <p>
            Recently, i decided to start learning to code in the cloud and learn some new technologies!
            <br></br><br></br>

            So, Here I am with my first Serverless portfolio built using following technologies<br></br>
            - React.js, Babel.js, npm, webpack <br></br>
            - AWS S3, AWS Code Build, AWS Code Pipeline, AWS Lambda, Python <br></br>
            - jest, Enzyme <br></br>
          </p>
        </div>
      </div>
    );
  };
};
export default AboutPage;
