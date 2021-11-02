import { Fragment } from "react";
import Home from "./../Home/index";
import Work from './../Work/index';
import Portfolio from './../Portfolio/index';
import Profile from './../Profile/index';
import About from './../About/index';
import SocialMedia from './../SocialMedia/index'
import Footer from './../Footer/index';

function Index() {
  return (
    <Fragment>
        <Home />
        <Work />
        <Portfolio />
        <Profile />
        <About />
        <SocialMedia />
        <Footer />
    </Fragment>
  );
}

export default Index;
