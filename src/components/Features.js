import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faGraduationCap, faMusic, faUser, faUsers } from '@fortawesome/free-solid-svg-icons';

import Card1 from '../assets/img/features/schottenschulle.jpg';
import Card2 from '../assets/img/features/auftritte.jpg';
import Card3 from '../assets/img/features/dudelsackunterricht.jpg';
import Card4 from '../assets/img/features/burnssupper.jpg';
import Card5 from '../assets/img/features/burnsconnection.jpg';

const Features = () => {
  return (
    <>
      <section className='features' id='usedfeatures'>
        <div className='features__container'>
          <h2 className='features__heading'>Schottenschulle</h2>
          <div className='features__cards'>
            <div className='features__card'>
              <img className='features__card-image' src={Card1} alt='Schottenschulle' />
              <div className='features__card-icon-background'></div>
              <div className='features__icon-container'>
                <p>
                  <FontAwesomeIcon icon={faUser} color='#fefefe' size='lg' />
                </p>
              </div>
              <div className='features__card-content'>
                <h5 className='features__card-heading'>Schottenschulle</h5>
                <p className='features__card-used-tech'>
                  Peter Schultze
                </p>
                <p className='features__card-used-tech-desc'>
                  Mehr als 30 Jahre Erfahrung als Dudelsackspieler und -lehrer
                </p>
              </div>
            </div>
            <div className='features__card'>
              <img className='features__card-image' src={Card2} alt='Auftritte' />
              <div className='features__card-icon-background'></div>
              <div className='features__icon-container'>
                <p>
                  <FontAwesomeIcon icon={faMusic} color='#fefefe' size='lg' />
                </p>
              </div>
              <div className='features__card-content'>
                <h5 className='features__card-heading'>Auftritte</h5>
                <p className='features__card-used-tech'>
                  Für Anlässe aller Art
                </p>
                <p className='features__card-used-tech-desc'>
                  Geburtstage, Hochzeiten, Jubiläen, Trauerfeiern uvm.
                </p>
              </div>
            </div>
            <div className='features__card'>
              <img className='features__card-image' src={Card3} alt='Dudelsackunterricht' />
              <div className='features__card-icon-background'></div>
              <div className='features__icon-container'>
                <p>
                  <FontAwesomeIcon icon={faGraduationCap} color='#fefefe' size='lg' />
                </p>
              </div>
              <div className='features__card-content'>
                <h5 className='features__card-heading'>Unterricht</h5>
                <p className='features__card-used-tech'>
                  Great Highland Backpipe
                </p>
                <p className='features__card-used-tech-desc'>
                  Erlernen Sie bei mir das Spielen des echten schottischen Dudelsacks
                </p>
              </div>
            </div>
            <div className='features__card'>
              <img className='features__card-image' src={Card4} alt='Burns Supper' />
              <div className='features__card-icon-background'></div>
              <div className='features__icon-container'>
                <p>
                  <FontAwesomeIcon icon={faGlobe} color='#fefefe' size='lg' />
                </p>
              </div>
              <div className='features__card-content'>
                <h5 className='features__card-heading'>Burns Supper</h5>
                <p className='features__card-used-tech'>
                  Zu Ehren Robert Burns'
                </p>
                <p className='features__card-used-tech-desc'>
                  Haggis, Whisky, Dudelsack und die Werke von Robert Burns
                </p>
              </div>
            </div>
            <div className='features__card'>
              <img className='features__card-image' src={Card5} alt='Burns Connection' />
              <div className='features__card-icon-background'></div>
              <div className='features__icon-container'>
                <p>
                  <FontAwesomeIcon
                    icon={faUsers}
                    color='#fefefe'
                    size='lg'
                  />
                </p>
              </div>
              <div className='features__card-content'>
                <h5 className='features__card-heading'>Burns Connection</h5>
                <p className='features__card-used-tech'>
                  Deutsch-Schottische Freundschaft
                </p>
                <p className='features__card-used-tech-desc'>
                  Meine Band, bestehend aus Freunden und Familie, mit der ich u. a. beim Rudolstadt Festival aufgetreten bin
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
