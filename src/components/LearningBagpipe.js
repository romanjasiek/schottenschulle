import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import webMVideo from '../assets/video/loop.webm';
import mp4Video from '../assets/video/loop.mp4';
import ogvVideo from '../assets/video/loop.ogv';

const LearningBagpipe = () => {
  return (
    <section className='learning' id='unterrichtanchor'>
      <video className='learning__video' loop playsInline autoPlay muted>
        <source type='video/webm' src={webMVideo} />
        <source type='video/mp4' src={mp4Video} />
        <source type='video/ogg' src={ogvVideo} />
      </video>

      <div className='learning__video-colorize'></div>

      <div className='learning__container'>
        <h3 className='learning__heading'>Dudelsackunterricht</h3>
        <div className='learning__desc'>
          <p>
            Wenn Sie gerne die <strong>Great Highland Bagpipe</strong> erlernen
            möchten, können Sie bei mir Unterricht erhalten! In der ersten
            Stunde, die zum Reinschnuppern und kostenlos ist, sprechen wir
            ausführlich über Ihre Wünsche und legen Ihren persönlichen Zeitplan
            fest.
          </p>
          <p>
            Im ersten Jahr werden Sie auf dem <strong>Practice Chanter</strong>
            &nbsp;(Übungsspielpfeife) spielen und erlernen die ersten Stücke
            sowie natürlich auch die entsprechende Verzierungstechnik (
            <strong>Gracenotes</strong>).
          </p>
          <p>
            Im weiteren Verlauf werden Sie auf dem Dudelsack und dem{' '}
            <strong>Practice Chanter</strong> spielen. Dabei erlernen Sie Slow
            Airs, Marches und Tanzmusik (<strong>Strathspeys</strong>,{' '}
            <strong>Reels</strong>, <strong>Jigs</strong>,{' '}
            <strong>Hornpipes</strong> u.a.).
          </p>
          <p>
            Gerne unterstütze und berate ich Sie auch beim Kauf eines
            Instruments.
          </p>
          <p></p>
        </div>
        <div className='learning__contact'>
          <Link
            className='button button--white button--background-blur'
            behavior='smooth'
            to='#footeranchor'
          >
            Kontakt
          </Link>
        </div>
      </div>
    </section>
  );
};

function checkScroll() {
  const videos = document.querySelectorAll('.learning__video');

  for (const video of videos) {
    const boundingRect = video.getBoundingClientRect();
    const visible =
      boundingRect.top + boundingRect.height > 0 &&
      boundingRect.top < window.innerHeight;

    if (visible) {
      video.play();
    } else {
      video.pause();
    }
  }
}

checkScroll();
window.addEventListener('load', checkScroll, false);
window.addEventListener('scroll', checkScroll, false);
window.addEventListener('resize', checkScroll, false);

export default LearningBagpipe;
