import { useRouteMatch, Route, Switch, Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

import NotFoundPage from "./NotFoundPage";
import PricePage from "./PricePage";
import OfertaPage from "./OfertaPage";
import PaymentRulesPage from "./PaymentRulesPage";

import background from './img/background.jpg';
import rectangle from './img/Rectangle.png';
import rocket from './img/Rocket.png';
import blot from './img/Blot.png';
import figure from './img/Figure.png';
import stars from './img/Stars.png';
import photo from './img/Photo.png';
import socials from './img/Socials.png';
import './App.scss';

import WhatWillBe from './WhatWillBe/WhatWillBe';
import CourseFor from './CourseFor/CourseFor';
import CoursePlan from './CoursePlan/CoursePlan';
import CourseRates from './CourseRates/CourseRates';
import CourseResults from './CourseResults/CourseResults';
import Footer from './Footer/Footer';
import WebPayPage from "./WebPayPage";

function App() {
  return (
    <Switch>

      <Route path="/404" component={NotFoundPage} />

      <Route path="/" exact render={() => (
        <div className="App" style={{ backgroundImage: `url(${background})` }}>
          <div className="main">
            <div className="error">
              <h2>Упс, временные неудобства :(</h2>
              <p>Зайди с другого устройства</p>
            </div>
            <div className="bg__rectangle" style={{ backgroundImage: `url(${rectangle})` }}>
              <div className="bg__rocket" style={{ backgroundImage: `url(${rocket})` }}>
                <div className="bg__blot" style={{ backgroundImage: `url(${blot})` }}>
                  <div className="bg__figure" style={{ backgroundImage: `url(${figure})` }}>
                    <div className="bg__stars" style={{ backgroundImage: `url(${stars})` }}>
                      <div className="bg__photo" style={{ backgroundImage: `url(${photo})` }}>
                        <div className="bg__socials" style={{ backgroundImage: `url(${socials})` }}>
                          <div className="container">
                            <div className="main__flex">
                              <p className="title">50 оттенков таргета</p>
                              <p className="title__info">6-недельный курс по таргетированной рекламе</p>
                              <p className="text__info">
                                За время курса вы научитесь настраивать рекламу в Facebook и Instagram.<br />
                                На выходе у вас будет все, чтобы клиент сказал “хочу от тебя рекламу”.<br /><br />
                                <span>70% учеников окупают курс уже на 5 неделе</span><br /><br />
                                Если вы пройдете курс от начала и до конца и не получите результат, я верну вам деньги :)
                              </p>
                              <div className="buttons">
                                <a className="btn__buy" href="#buy">
                                  <p>Купить</p>
                                </a>
                                <a className="btn__plan" href="#plan">
                                  <p>Программа курса</p>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <WhatWillBe />
          <CourseFor />
          <a name="plan">
            <CoursePlan />
          </a>
          <a name="buy">
            <CourseRates />
          </a>
          <CourseResults />
          <Footer />
        </div>
      )} />
      <Route path="/price" component={PricePage} />
      <Route path="/oferta" component={OfertaPage} />
      <Route path="/payment-rules" component={PaymentRulesPage} />
      <Route path="/payment-delivery" component={WebPayPage} />
      <Route render={() => (
        <Redirect to="/404" />
      )} />
    </Switch>
  );
}

export default App;