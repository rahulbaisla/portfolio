import React from 'react';
import LandingPage from './pages/LandingPage/LandingPage'
import AboutPage from './pages/AboutPage/AboutPage'
import PortfolioPage from './pages/PortfolioPage/PortfolioPage'


class  App extends React.Component {
  render() {
    return (
      <div id="root">
        <LandingPage />
        <AboutPage />
      </div>
    );
  };
};

export default App;
