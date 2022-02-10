import React from 'react';
import { SRLWrapper } from 'simple-react-lightbox';

import Schottenschulle from '../assets/img/gallery/schottenschulle.jpg';
import Schottenschulle2 from '../assets/img/gallery/schottenschulle2.jpg';
import Schottenschulle3 from '../assets/img/gallery/schottenschulle3.jpg';
import Schottenschulle4 from '../assets/img/gallery/schottenschulle4.jpg';
import Schottenschulle5 from '../assets/img/gallery/schottenschulle5.jpg';
import Schottenschulle6 from '../assets/img/gallery/schottenschulle6.jpg';
import Schottenschulle7 from '../assets/img/gallery/schottenschulle7.jpg';
import Schottenschulle8 from '../assets/img/gallery/schottenschulle8.jpg';
import Schottenschulle9 from '../assets/img/gallery/schottenschulle9.jpg';
import Schottenschulle10 from '../assets/img/gallery/schottenschulle10.jpg';
import Schottenschulle11 from '../assets/img/gallery/schottenschulle11.jpg';
import Schottenschulle12 from '../assets/img/gallery/schottenschulle12.jpg';
import Schottenschulle13 from '../assets/img/gallery/schottenschulle13.jpg';
import Schottenschulle14 from '../assets/img/gallery/schottenschulle14.jpg';

const Gallery = () => {
  return (
    <>
      <SRLWrapper>
        <section className='gallery' id='galleryanchor'>
          <div className='gallery__container'>
            <h3 className='gallery__heading' id='galleries'>
              Impressionen
            </h3>

            <div className='gallery__list'>
              <div className='gallery__list-item gallery__list-item--first'>
                <img
                  loading='lazy'
                  className='gallery__list-item-image'
                  src={Schottenschulle}
                  alt='Schottenschulle'
                />
              </div>
              <div className='gallery__list-item' href='#gallery'>
                <img
                  loading='lazy'
                  className='gallery__list-item-image'
                  src={Schottenschulle2}
                  alt='Schottenschulle'
                />
              </div>
              <div className='gallery__list-item' href='#gallery'>
                <img
                  loading='lazy'
                  className='gallery__list-item-image'
                  src={Schottenschulle3}
                  alt='Schottenschulle'
                />
              </div>
              <div className='gallery__list-item' href='#gallery'>
                <img
                  loading='lazy'
                  className='gallery__list-item-image'
                  src={Schottenschulle4}
                  alt='Schottenschulle'
                />
              </div>
              <div className='gallery__list-item' href='#gallery'>
                <img
                  loading='lazy'
                  className='gallery__list-item-image'
                  src={Schottenschulle5}
                  alt='Schottenschulle'
                />
              </div>
              <div className='gallery__list-item' href='#gallery'>
                <img
                  loading='lazy'
                  className='gallery__list-item-image'
                  src={Schottenschulle6}
                  alt='Schottenschulle'
                />
              </div>
              <div className='gallery__list-item' href='#gallery'>
                <img
                  loading='lazy'
                  className='gallery__list-item-image'
                  src={Schottenschulle7}
                  alt='Schottenschulle'
                />
              </div>
              <div className='gallery__list-item' href='#gallery'>
                <img
                  loading='lazy'
                  className='gallery__list-item-image'
                  src={Schottenschulle8}
                  alt='Schottenschulle'
                />
              </div>
              <div className='gallery__list-item' href='#gallery'>
                <img
                  loading='lazy'
                  className='gallery__list-item-image'
                  src={Schottenschulle9}
                  alt='Schottenschulle'
                />
              </div>
              <div className='gallery__list-item' href='#gallery'>
                <img
                  loading='lazy'
                  className='gallery__list-item-image'
                  src={Schottenschulle10}
                  alt='Schottenschulle'
                />
              </div>
              <div className='gallery__list-item' href='#gallery'>
                <img
                  loading='lazy'
                  className='gallery__list-item-image'
                  src={Schottenschulle11}
                  alt='Schottenschulle'
                />
              </div>
              <div className='gallery__list-item gallery__list-item--last' href='#gallery'>
                <img
                  loading='lazy'
                  className='gallery__list-item-image'
                  src={Schottenschulle12}
                  alt='Schottenschulle'
                />
              </div>
              <div className='gallery__list-item' href='#gallery'>
                <img
                  loading='lazy'
                  className='gallery__list-item-image'
                  src={Schottenschulle13}
                  alt='Schottenschulle'
                />
              </div>
              <div className='gallery__list-item' href='#gallery'>
                <img
                  loading='lazy'
                  className='gallery__list-item-image'
                  src={Schottenschulle14}
                  alt='Schottenschulle'
                />
              </div>
             </div>
          </div>
        </section>
      </SRLWrapper>
    </>
  );
};

export default Gallery;
