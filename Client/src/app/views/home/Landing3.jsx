import React, { Component } from "react";
import { scrollTo } from "utils";
import Service3 from "./sections/Services3";
import Service4 from "./sections/Services4";
import Service5 from "./sections/Services5";
import Service6 from "./sections/Services6";
import Service7 from "./sections/Services7";
import Testimonial3 from "./sections/Testimonial3";
import Intro3 from "./sections/Intro3";
import FooterCarourel from "./sections/FooterCarourel";
import TopBar3 from "./sections/TopBar3";
import Header3 from "./sections/Header3";
import Contact from "./sections/Contact";
import CallToAction2 from "./sections/CallToAction2";
import Pricing1 from "./sections/Pricing1";
import Footer1 from "./sections/Footer1";
import ShowListZoom from "./sections/ShowListZoom";
import Contact1 from "./sections/Contact1";

class Landing3 extends Component {
  state = {};
  componentWillUnmount() {
    scrollTo("root");
  }

  render() {
    const { t, i18n } = this.props;
    return (
      <div className="landing">
        <TopBar3 t={t} i18n={i18n}/>
        <Intro3 t={t} i18n={i18n} />
        <FooterCarourel t={t} i18n={i18n} />
        {/* <ShowListZoom t={t} i18n={i18n} /> */}
        <Header3></Header3>
        <Contact></Contact>
      </div>
    );
  }
}

export default Landing3;
