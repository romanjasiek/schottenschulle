import React from 'react';

import Schottenschulle from '../assets/img/welcome/schottenschulle.jpg';
import Schottenschulle2 from '../assets/img/welcome/schottenschulle2.jpg';
import Schottenschulle3 from '../assets/img/welcome/schottenschulle3.jpg';

const WelcomeSection = () => {
  return (
    <>
      <section className='welcome'>
        <div className='container'>
          <div className='welcome__column-text'>
            <h2 className='welcome__text-heading'>
              Willkommen bei Schottenschulle!
            </h2>
            <p className='welcome__text'>
              Auf dieser Seiten möchte ich mich Ihnen vorstellen. Ich erzähle
              Ihnen von mir, meinen Auftritten, dem{' '}
              <strong>Burns Supper</strong> sowie der{' '}
              <strong>Burns Connection</strong>. Und wenn Sie möchten, erfahren
              Sie auch Näheres über den <strong>Dudelsackunterricht</strong>,
              den ich in <strong>Berlin-Pankow</strong> gebe. Bei Fragen oder
              Kontaktwünschen stehe ich Ihnen gerne zur Verfügung.
            </p>
            <p className='welcome__text'>
              Lassen Sie sich faszinieren von den Klängen der{' '}
              <strong>Great Highland Bagpipe</strong>!
            </p>
            <p className='welcome__text'>Herzlich</p>
            <p className='welcome__text'>
              Ihr <strong>Peter Schultze</strong>
            </p>
          </div>
          <div className='welcome__column-images'>
            <picture>
              <img
                className='welcome__image welcome__image--first'
                src={Schottenschulle}
                alt='Schottenschulle'
              />
            </picture>
            <picture>
              <img
                className='welcome__image welcome__image--second'
                src={Schottenschulle2}
                alt='Schottenschulle'
              />
            </picture>
            <picture>
              <img
                className='welcome__image welcome__image--third'
                src={Schottenschulle3}
                alt='Schottenschulle'
              />
            </picture>
          </div>
        </div>
      </section>
    </>
  );
};

export default WelcomeSection;