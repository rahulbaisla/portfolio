import React from 'react';


class  LandingPage extends React.Component {
  render() {
    return (

      <div className="landing-page">
        <main>
          <div id="intro" className="intro">Hello I'm Rahul</div>
          <div id="tagLine" className="tagline">Full Stack Dev | AWS | JAVA | Spring | React.js</div>
          <div id="social-icons" className="icons-social">
            <a id="githubUrl" target="_blank" href="https://github.com/rahulbaisla"><i className="fab fa-github"></i></a>
            <a target="_blank" href="https://www.linkedin.com/in/rahul-bansal-69146015/"><i className="fab fa-linkedin"></i></a>
            <a target="_blank" href="https://codepen.io/rahulbaisla/"><i className="fab fa-codepen"></i></a>
            <a target="_blank" href="https://www.facebook.com/rahulbaisla"><i className="fab fa-facebook"></i></a>
            <a target="_blank" href="https://www.instagram.com/strength.letic"><i className="fab fa-instagram"></i></a>
            <a target="_blank" href="RahulBansal-Resume.doc"><i className="fas fa-file-alt"></i></a>

          </div>
        </main>
      </div>
    );
  };
};
export default LandingPage;
