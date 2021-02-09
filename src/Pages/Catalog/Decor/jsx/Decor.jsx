import React from 'react';
import Footer from '../../../Main/Footer/jsx/Footer';
import Header from '../../../Main/Header/jsx/Header';
import decor1 from '../img/decor1.jpg';
import decor2 from '../img/decor2.jpg';
import decor3 from '../img/decor3.jpg';

const Decor = () => (
  <>
    <Header linkItem={<button type="button" className="buttonBack">Назад</button>} link="/main-page" />
    <div className="container-wrap">
      <div className="items">
        <div className="item">
          <img src={decor1} alt="Часы настенные" title="Часы настенные" />
          <p>33 РУБ.</p>
          <h4>Часы настенные</h4>
        </div>
        <div className="item">
          <img src={decor2} alt="Репродукция в раме" title="Репродукция в раме" />
          <p>42 РУБ.</p>
          <h4>Репродукция в раме</h4>
        </div>
        <div className="item">
          <img src={decor3} alt="Подушка декоративная" title="Подушка декоративная" />
          <p>28 РУБ.</p>
          <h4>Подушка декоративная</h4>
        </div>
      </div>
    </div>
    <Footer />
  </>
);

export default Decor;
