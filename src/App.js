import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "./Css/App.css";
import Lottie from "react-lottie";
import animationData from "./lotties/hand";
import Home from "./Component/Home";
import About from "./Component/About";
import Works from "./Component/Works";
import Error from "./Component/Error";
import List from "./Component/List";
import ScrollToTop from "./Component/ScrollToTop";
import { Helmet } from "react-helmet";

const App = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="app">
          <Lottie
            options={defaultOptions}
            height={200}
            width={200}
            isClickToPauseDisabled={true}
            loading={loading}
          />
        </div>
      ) : (
        <>
          <Helmet>
            <meta name="description" content="Ui/Ux Engineer" />
            <meta
              name="keywords"
              content="Heshan Tharindu kalubowila, ui designer, Ui developer, Frond-end developer, uiux, Ui/Ux designer, Heshan, tharindu, kalubowila"
            />
          </Helmet>

          <ScrollToTop />
          <List />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/works" component={Works} />
            <Route path="/about" component={About} />
            <Route component={Error} />
          </Switch>
        </>
      )}
    </div>
  );
};
export default App;
