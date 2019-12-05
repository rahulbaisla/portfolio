import React from 'react';


class  AboutPage extends React.Component {
  render() {
    return (
      <div class="about-page">
        <div class="about-page-content">
        <ul>
            <li>This landing page is built and deployed using following technologies</li>
            <li>Frontend : React.js, Babel.js, npm, webpack </li>
            <li>CI/CD : AWS S3, AWS Code Build, AWS Code Pipeline, AWS Lambda </li>
        </ul>
        </div>
      </div>
    );
  };
};
export default AboutPage;
