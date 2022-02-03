import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';

const Impressum = () => {
  return (
    <section className='impressum__container'>
      <h3 className='impressum__heading'>Impressum</h3>
      <h4>Angaben gemäß § 5 TMG:</h4>
      <p>Schottenschulle</p>
      <p>Peter Schultze</p>
      <p>Pradelstr. 11</p>
      <p>13187 Berlin</p>
      <h4>Kontakt</h4>
      <p>Telefon: 030-4811672</p>
      <p>E-Mail: schottenschulle@aol.com</p>
      <div>
        <Link className='impressum__close-link' to='/'>
          <FontAwesomeIcon icon={faTimesCircle} />
          &nbsp;Impressum schließen
        </Link>
      </div>
    </section>
  );
};

export default Impressum;
