import React from 'react';
import { SRLWrapper } from 'simple-react-lightbox';

import Schottenschulle from '../assets/img/gallery/schottenschulle.jpg';
import Schottenschulle2 from '../assets/img/gallery/schottenschulle2.jpg';
import Schottenschulle3 from '../assets/img/gallery/schottenschulle3.jpg';
import Schottenschulle4 from '../assets/img/gallery/schottenschulle4.jpg';
import Schottenschulle5 from '../assets/img/gallery/schottenschulle5.jpg';
import Schottenschulle6 from '../assets/img/gallery/schottenschulle6.jpg';
import Schottenschulle7 from '../assets/img/gallery/schottenschulle7.jpg';

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
             </div>
          </div>
        </section>
      </SRLWrapper>
    </>
  );
};

export default Gallery;
