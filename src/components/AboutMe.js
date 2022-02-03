import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import ScotlandTheBrave from '../assets/audio/scotlandthebrave.mp3';

import Schottenschulle1 from '../assets/img/aboutme/schottenschulle1.jpg';
import Schottenschulle2 from '../assets/img/aboutme/schottenschulle2.jpg';
import Schottenschulle3 from '../assets/img/aboutme/schottenschulle3.jpg';
import Schottenschulle4 from '../assets/img/aboutme/schottenschulle4.jpg';

const AboutMe = () => {
  return (
    <section className='aboutme' id='aboutmeanchor'>
      <div className='container'>
        <div className='aboutme__slideshow'>
          <img
            className='aboutme__img'
            src={Schottenschulle1}
            alt='Schottenschulle'
          />
          <img
            className='aboutme__img aboutme__img--slideshow aboutme__img--slideshow-1'
            src={Schottenschulle2}
            alt='Schottenschulle'
          />
          <img
            className='aboutme__img aboutme__img--slideshow aboutme__img--slideshow-2'
            src={Schottenschulle3}
            alt='Schottenschulle'
          />
          <img
            className='aboutme__img aboutme__img--slideshow aboutme__img--slideshow-3'
            src={Schottenschulle4}
            alt='Schottenschulle'
          />
        </div>
        <div className='aboutme__text'>
          <h3 className='aboutme__heading'>Über mich</h3>
          <p className='aboutme__paragraph'>
            Ich spiele traditionelle schottische Dudelsackmusik auf der{' '}
            <strong>Great Highland Bagpipe</strong>. Gelernt habe ich dieses
            Instrument in <strong>Glasgow</strong>, wo ich schon oft in Kneipen
            und zur <strong>St. Andrews Night</strong> aufgetreten bin. In
            <strong>Berlin</strong> habe ich unter anderem bei Konzerten mit
            Dudelsack & Orgel in Kirchen mitgewirkt, sowie bei jährlichen
            Auftritten beim schottischen <strong>Burns Supper</strong>.
          </p>
          <p className='aboutme__paragraph'>
            Sie möchten gerne einmal hören, wie sich dieses faszinierende
            Instrument anhört? Nachfolgend habe ich eine kleine Hörprobe für
            Sie. Das Stück heißt <strong>“Scotland the Brave”</strong>. Viel
            Vergnügen!
          </p>
        </div>
        <div>
          <ReactAudioPlayer
            src={ScotlandTheBrave}
            controls
            controlsList='nodownload'
            preload='metadata'
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
