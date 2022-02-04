import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGift,
  faHeart,
  faCross,
  faChild,
} from '@fortawesome/free-solid-svg-icons';

const FeatureDetails = () => {
  return (
    <>
      <section className='feature-details' id='auftritteanchor'>
        <div className='container px-4 py-5' id='icon-grid'>
          <h2 className='pb-2 border-bottom feature-details__heading'>
            Auftritte
          </h2>
          <p className='feature-details__text'>
            Ob zu <strong>Geburtstagen</strong>, <strong>Hochzeiten</strong>,{' '}
            <strong>Familienfeiern</strong>, <strong>Jubiläen</strong>,{' '}
            <strong>Begräbnissen</strong> oder{' '}
            <strong>sonstigen Anlässen</strong> - mit Schottenschulle werden Sie
            mit Ihrer Familie, Ihren Freunden und/oder Kollegen ein Erlebnis
            haben, das Ihnen lange in Erinnerung bleiben wird.
          </p>

          <div className='row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-2 g-4 py-5'>
            <div className='col d-flex align-items-start'>
              <FontAwesomeIcon icon={faGift} size='2x' />
              &nbsp;
              <div>
                <h4 className='mb-1 fading feature-details__sub-heading'>
                  Geburtstage
                </h4>
                <p className='feature-details__text'>
                  Ich begrüße Ihren Geburtstag durch den feierlichen Einzug mit
                  der schottischen Nationalhymne “
                  <strong>Scotland the Brave</strong>”. Zur Gratulation darf
                  natürlich das “<strong>Happy birthday to you</strong>” nicht
                  fehlen.
                </p>
                <p className='feature-details__text'>
                  Weiterhin überreiche Ihnen eine Miniatur mit schottischem Malt
                  Whisky. Anschließend folgen unter anderem “
                  <strong>Amazing Grace</strong>”, “
                  <strong>The Green Hills of Tyrol</strong>” und dem
                  Hochlandstanz “<strong>Atholl Highlanders</strong>”.
                </p>
                <p className='feature-details__text'>
                  Zum Abschluss spiele ich “
                  <strong>Muß I denn zum Städtele hinaus</strong>” und als
                  krönendes Finale das Abschiedslied der Schotten, “
                  <strong>Auld Lang Syne</strong>”.
                </p>
              </div>
            </div>
            <div className='col d-flex align-items-start'>
              <FontAwesomeIcon icon={faHeart} size='2x' />
              &nbsp;
              <div>
                <h4 className='mb-1 fading feature-details__sub-heading'>
                  Hochzeiten
                </h4>
                <p className='feature-details__text'>
                  In Schottland darf der Wedding Piper nicht fehlen… bei uns ist
                  er noch die Ausnahme.
                </p>
                <p className='feature-details__text'>
                  Ihre Hochzeit wird noch feierlicher und es bleibt gewiss kein
                  Auge trocken mit “<strong>Amazing Grace</strong>”, dem
                  schottischen Hochzeitsmarsch “
                  <strong>Mairie's Wedding</strong>”, sowie “
                  <strong>Highland Cathedral</strong>” und dem Hochzeitsmarsch
                  von Richard Wagner aus Lohengrin “
                  <strong>Treulich vereint ziehet dahin</strong>”.
                </p>
              </div>
            </div>
            <div className='col d-flex align-items-start'>
              <FontAwesomeIcon icon={faCross} size='2x' />
              &nbsp;
              <div>
                <h4 className='mb-1 fading feature-details__sub-heading'>
                  Begräbnisse
                </h4>
                <p className='feature-details__text'>
                  Mit Slow Airs und Laments (Trauerlieder) aus Schottland
                  unterstreicht der Klang der{' '}
                  <strong>Great Highland Bagpipe</strong> den würdevollen
                  Abschied von einem geliebten Menschen.
                </p>
                <p className='feature-details__text'>
                  Ich spiele auf der Trauerfeier unter anderem:
                </p>
                <ul>
                  <li>
                    "<strong>Amazing Grace</strong>"
                  </li>
                  <li>
                    "<strong>Lochaber no more</strong>"
                  </li>
                  <li>
                    "<strong>Dark Island</strong>"
                  </li>
                  <li>
                    "<strong>Flowers of the Forest</strong>"
                  </li>
                  <li>
                    "<strong>Skye Boat Song</strong>"
                  </li>
                  <li>
                    "<strong>Lament for the Viscount of Dundee</strong>"
                  </li>
                </ul>
              </div>
            </div>
            <div className='col d-flex align-items-start'>
              <FontAwesomeIcon icon={faChild} size='2x' />
              &nbsp;
              <div>
                <h4 className='mb-1 fading feature-details__sub-heading'>
                  Kinderumzüge
                </h4>
                <p className='feature-details__text'>
                  Auch Kinder haben ihre Freude beim Auftritt von{' '}
                  <strong>Schottenschulle</strong>.
                </p>
                <p className='feature-details__text'>
                  Laternenumzüge begleite ich mit vielen bekannten
                  Kinderliedern, sowie auch “
                  <strong>Ich geh mit meiner Laterne</strong>”. Den Abschluß
                  bildet das Stück “<strong>Ade zur guten Nacht</strong>”.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureDetails;
